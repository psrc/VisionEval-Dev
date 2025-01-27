### extract.R
#   Examples of retrieving raw data from a finished model run

require(VEModel) # just in case it's not already out there...
mwr <- openModel("VERSPM-run") # Run Install.R to install/run that model

##########################  
# EXTRACTING MODEL RESULTS
##########################

# "Extraction" means pulling out some or all of the raw data generated by a VisionEval
# model. If you want to get summary performance metrics from a model's results, look at
# "qxueries.R" Generally, you'll "extract" the results if you plan to use another program
# to analyze the raw data. (e.g. Access, Excel, Tableau, PowerBI, etc.).

# Analyzing multiple scenarios is usually easier to perform if you run queries - extract
# is designed to do just one scenario at a time, so you'll have to loop manually (or in
# your own script) over all the scenarios (queries do that automatically). Plus,
# extracting a large model's results will generate hundreds of megabytes of output data
# (perhaps even gigabytes...)

# Dump all of a model's results:
results <- mwr$results()
if ( is.list(results) ) { # TRUE if there are multiple Reportable stages
  message("All the reportable model stages:")
  print(names(results))
  message("Just using the last one")
  results <- results[[length(results)]]  # or select a different stage by name or index
  # See "model-stages.R" for how to work with a staged model (results list)
}
print(results) # In a one-stage model, you get the final results
# Otherwise, the code in this walkthrough works on the last Reportable stage

# You can get a low-level report of what is in the results Datastore

datastore.list <- results$list() # default is to show the Group/Table/Name list
print(length(datastore.list))    # number of fields in the results
print(datastore.list[sample(length(datastore.list),10)])

# here are all the fields available (see how to use it below in DisplayUnits example)
datastore.full.list <- results$list(details=TRUE)
print(names(datastore.full.list))
print(datastore.full.list[sample(nrow(datastore.full.list),10),])

# Compare the model list function to the results list function
# The model list reports what is in the model SPECIFICATIONS (i.e. "in theory")
# the results list reports what is in the Datastore after a run (i.e. "in reality")
# if the model crashed before completion, the two lists will be different!
modelspecs.full.list <- mwr$list(details=TRUE)
print(names(modelspecs.full.list))
print(modelspecs.full.list[sample(nrow(modelspecs.full.list),10),])

# Remember that you can open (or extract) the model results even if something went wrong during a
# run - the results list will show you the subset of data that got computed before the model
# crashed. Very helpful for debugging! (See "debugging.R")

# Result extraction must be done stage-by-stage (or scenario-by-scenario)
# See "model-stages.R" and "scenarios.R" walkthrough for how to manage stages
# (including dumping all the raw scenario data into a - possibly huge - database)

# Queries, on the other hand, work just fine with scenarios and modelStages
# (that is, you just run the query on the results and it will process every Reportable stage).
# See the "Queries.R" walkthrough.

# Here's the basic extraction of everything in the final Reportable model stage
results$extract()
mwr$dir(output=TRUE)                # Just shows the sub-directory names holding outputs
print(
  outputs <- mwr$dir(output=TRUE,all.files=TRUE,shorten=FALSE) # Lists all the extracted output files
  # shorten=FALSE says do not strip off model path - return absolute path
)

# Inspect one of the metadata files (metadata is very basic: just the field
# group/table/name and units (plus display units if those are different)
metadata.HH2038 <- read.csv( file=grep("2038_Household.*metadata\\.csv",outputs,value=TRUE))

# See what is selected
print(results)
sl <- results$select() # Get list of all the available fields (uses results$list() database)

# show the selected fields (in short form)
print(sl)

# it's simpler to use the following (because you can print just a subset):
sl$fields()[1:10]

fnd <- results$find()   # Does essentially the same thing as select, but can do more (see below)
fnd$fields()[1:10]      # Same list as above

# Get lists of groups and tables.
print( sl$groups() )    # Typically, "Global" plus one group for each model run year
print( sl$tables() )    # All the tables, along with their groups

# Just fields in the workers table, but in any available years:
# Special Group "Year" (or "Years") leaves out the "Global" group without having
# to look up the actual years that this model ran for.
# See "run-parameters.R" walkthrough for how to find out the model years by asking the model (rather
# than opening its configuration)
wkr <- results$find(Group="Year",Table="Worker")
print(wkr)
print(wkr$fields()) # same...

# Provide a list of table names to find
# Can also do that with Group or Field
# Will get both tables in all Groups (unless you select a specific Group)
wkr.veh <- results$find(Table=c("Worker","Vehicle"))
print(wkr.veh)
rm(wkr.veh)

# Explore more selection features:

print(wkr$show()[1:10,]) # shows the detailed modelIndex for selected fields
# the table that comes out resembles results$list(), but only shows the selection

print(results) # All fields selected in results

wkr <- results$select( wkr ) # filters results on selected fields
print(results) # Just the Worker tables selected

sl <- results$select(NA) # get the results that are currently selected
print(sl)

results$select() # clear selection (selects all)
print(results)

# "all-in-one" instruction to find and select fields
wkr <- results$find(Group="Year",Table="Worker",select=TRUE)
print(results) # Just the Worker tables selected

#######################################
# SELECTING GROUPS, TABLES AND DATASETS
#######################################

# Access a VESelection object based on the results in order to do more complex selection
# (e.g. several tables with different fields in each one)

# Do some basic field extraction - list fields
sl <- results$select() # get the selection from within the results
print(results)
sl$find(Group='2010',Table='Worker',select=TRUE)
print(results)
# Notice that the selection in results was changed!

# Even though the following looks like it is working on something separate,
# "sl" (the selection) is attached to the results because of how we
# created it. To create a "free" selection, use find

results$select() # reset results selection
print(results)
sl.find <- results$find() # a COPY of the results selection, finding everything
sl.find$find(Group='2010',Table='Worker',select=TRUE)
print(sl.find)
print(results) # All fields are still selected!

# to use sl.find, we need to attach it to the results
results$select(sl.find)   # reattaches sl.find to results
print(results)

sl$all() # select everything (in results)
print(sl$groups())
print(sl$tables())
fld <- sl$fields()
print(fld[sample(length(fld),20)])

# Select some subsets by group, table or field name...
sl$all() # reset selection to all fields
print(sl$groups()) # all groups
sl$select( sl$find(Group="Years") )
print(sl$groups()) # just the year groups
sl$find(Group=sl$groups()[1], select=TRUE )   # Select just the first ones, using selection shorthand
print(sl$groups()) # just the earliest year (probably the Base Year)

# Select the Household and Vehicle tables in the first Year group
sl$select( sl$find(Group=sl$groups()[1],Table=c("Household","Vehicle")) )
print(head(sl$show(),n=12)) # first 12 rows of selected modelIndex

# Can do an extraction directly from the selection
# (don't have to select results dpirectly)
print(results)     # Just the Household and Vehicle tables selected
print(sl)
sl$extract()
results$extract() # WARNING: Uses "sl" selection
sl$all()          # deselect everything in the selection
print(results)    # everything selected in results as well

slf <- results$find() # all fields; selection not attached to results
slf$find(Table="Worker",select=TRUE)
print(results)    # everything still selected
print(slf)    # Worker table in all years
slf$and( slf$find(Group="2010") ) # Limit to Worker table just to 2010
slf$or( slf$find(Group="2038",Table="Vehicle") ) # Also include 2038 Vehicle table (plus 2010 Worker table)
print(slf)
print(results)    # results still have everything selected

slf$extract()     # just extract 2010 Worker and 2038 Vehicle (base selection of results is unaltered)

##################
# CLEARING RESULTS
##################

mwr$dir(outputs=TRUE) # Show all the output folders we created by extracting above
mwr$clear()           # By default, will offer to clear any outputs; can also clear current or saved model results
# Choose "all" to delete all outputs, or you can select them by number or range
mwr$dir(outputs=TRUE,all.files=TRUE) # in case you forgot what is in each extraction folder...

slf$extract()
mwr$dir(outputs=TRUE)
mwr$clear(outputOnly=TRUE,force=TRUE) # Just blow them all away without asking
# WARNING: if there are no outputs you will STILL be asked for confirmation (or if this
# command is not executed interactively, the instruction will be ignored)

###########################
# SELECTING A FIELD PATTERN
###########################

# Select fields using a "pattern" (R regular expression applied just to the field name)
slf <- results$find(pattern="speed",Group="Year",Table=c("Household","Vehicle","Marea","Bzone"))
print(slf$fields()) # only fields that have "speed" in their name

########################
# CHANGING DISPLAY UNITS
########################

# Programatically set up the display_units file with a useful conversion
# This shows how to construct a DisplayUnitsFile
# Practically speaking, you can do this once in your life and drop it
# into your model's "defs" directory.
un <- results$list(details=TRUE)[,c("Group","Table","Name","Units")]
spd <- un[ grepl("MI/",un$Units)&grepl("sp",un$Name,ignore.case=TRUE), ]
spd$DisplayUnits <- "MI/HR"
print(spd)

# Put the display_units file in a useful place (model 'defs' directory)
# This file will be automatically used during export!
display_units_file <- file.path(
  mwr$modelPath,
  mwr$setting("ParamDir"),
  mwr$setting("DisplayUnitsFile") # defaults to 'display_units.csv'
)
cat(display_units_file,"\n")
write.csv(spd,file=display_units_file,row.names=FALSE)

# Select speed fields...
# We'll construct a list of Datastore speed-related field names using the
#  fields we found from the results$list() function above
# Or as we saw before, we could probe around in the results directly.

# Get a selection attached to the results
sl <- results$select()

sl$all() # re-select everything
sl$select( with(spd,paste(Group,Table,Name,sep="/")) ) # select the speed fields
print(sl) # All of them happen to be in the Marea Table
print(results) # Notice that sl fields are also still selected

# Could do the following instead
sl$find(pattern="speed",select=TRUE)
print(sl)

# Though you can use results$list() or results$show() to see the
# field units and display_units, it's a bit simpler to use the
# shortcut "units" function.

# Showing currently defined UNITS/DISPLAYUNITS (via selection)
print(sl$results$units())

# Showing currently defined UNITS/DISPLAYUNITS (directly from results)
print(results$units())

###################
# ADDING KEY FIELDS
###################

# Because we only included the "good stuff" (speed fields), we should
# add back in the Table key fields

# We could manually add the geography fields in the Marea Table
# (Useful if you already know exactly which you need)
geoFields <- sl$find("^Marea$",Group="Years",Table="Marea")
print(geoFields)

# There's a shortcut for adding the primary and foreign key fields to each Table
# Useful if you just want something that will work with your external database
print(sl$fields())  # the "good stuff"
sl$addkeys() # Only operates on tables that are already selected and ignores tables that are not
print(sl$fields())  # now with added key fields
print(results$units()) # Units for the results...

# Extracting speed fields using DISPLAY units (prefix adjusts the extracted results)
sl$extract(prefix="DisplayUnits")                 # Using DISPLAY units

# Extract speed fields using DATASTORE units
# Note: "export" is the same (for now) as "extract"
# Eventually, "extract" will always produce a list of data.frames, and "export" will save it
sl$export(prefix="Datastore",convertUnits=FALSE)  # Using DATASTORE units

# Return model to its original state (no defined conversions) if you like
# Without deleting it, it will continue to apply by default to subsequent extractions
# unlink(display_units_file)

# Go back to the model dir function and look at the outputs
# It's "mwr" if you're following the walkthrough, but here's how you can
# mine the model back out of the selection or results object.
I.forgot.which.model <- sl$results$modelStage$Model
I.forgot.which.model$dir(outputs=TRUE)

# In general, it is better to use queries to do the extraction and unit conversion
# since you may confuse yourself when you load up the extracted raw data into your
# other database...

#############################
# EXTRACTING AS R DATA.FRAMES
#############################

# Reset the selection to something useful
slf <- results$find(pattern="speed",Group="Year",Table=c("Household","Vehicle","Marea","Bzone"))
print(slf)
slf$addkeys() # Add table key fields (see below)
print(slf)    # Note that it now contains Marea as key

# extract can produce a list of R data.frames instead of .csv files
# you can save those in any file format that can understand a table of rows and columns
extracted.df <- slf$extract(saveTo=FALSE)
# returns a named list of data.frames whose names correspond to the tables
print(names(extracted.df))
print(names(extracted.df$`2010.Marea`)) # note quotes around "numeric" Group.Table name

# you can also get data.frames with the metadata for each field (rather than the data)
meta.df <- slf$extract(saveTo=FALSE,data=FALSE)
print(names(meta.df[[1]]))    # Columns are the metadata fields
print(meta.df[[1]][1:10,])    # Rows are the individual data element names and their metadata values

#############################
# SAVING TO EXTERNAL DATABASE
#############################

# Here's an example to load the Workers and Vehicle tables we extracted into a new Sqlite
# database in a subdirectory of the VisionEval runtime.
if ( ! require(DBI) || ! require(RSQLite) ) {
  message("Please install the DBI and SqliteR packages")
  stop("Stopping here - run package installation manually")
  install.into <- .libPaths()[1]     # Pick a better lib location if you have one
  install.packages("DBI",lib=install.into)
  require(DBI)
  install.into <- .libPaths()[1]     # Pick a better lib location if you have one
  install.packages("RSQLite",lib=install.into)
  require(RSQLite)
}

# Note that the following general concept will work with ANY R DBI compliant datasource,
# so you can use Excel (if the tables don't have too many rows) or Access, or SQLServer or
# Oracle or PostgreSQL or ... whatever!
# Just change the db.connection (see the R DBI documentation and the
# package docs for your particular database). You may have to tinker with Excel
# to get the Workbook/Worksheets to come out right...

# Make a temporary SQLite database (delete any already there)
db.connection <- file.path(results$resultsPath,mwr$setting("OutputDir"),"my-db.sqlite")

# Avoid problems with blocked overwrite
# if ( file.exists(db.connection) ) unlink(db.connection)
# Alternatively, add overwrite=TRUE to dbWriteTable below

mydb <- dbConnect(RSQLite::SQLite(), db.connection)

# Put the extracted data into the new database
for ( ve.table in names(extracted.df) ) {
  # Write the results to the table (same name as the data.frame)
  dbWriteTable( mydb, ve.table, extracted.df[[ve.table]], overwrite=TRUE )
}

# See the tables in the database (or visit it outside R)
dbListTables(mydb)

# It's good practice to close the database when you're done with it
dbDisconnect(mydb)

################################
# FLATTEN OR CONVERT A DATASTORE
################################

# to do this right with a staged model, you need to iterate over the
# "Reportable" stages and copy their results one by one - you'll end up
# with multiple copies of the preceding stage data.

test.dir <- file.path(getRuntimeDirectory(),"Test-Results-Copy")

# test.dir will be created if it doesn't exist. To recreate, use "overwrite=TRUE"
results$copy(test.dir,Flatten=c(TRUE,TRUE),overwrite=TRUE) # Force use of "Flatten" even if result is already flat
tr <- openResults(test.dir)                 # Any directory with ModelState.Rda and Datastore can be opened
print(tr)

# Can still do all the usual stuff with a "detached" Datastore
sl <- tr$select()
sl$find(Group="2038",Table=c("Household","Vehicle"),select=TRUE)
print(sl)
print(tr) # selection is attached to tr
print(head(sl$show(),n=12)) # first 12 rows of selected modelIndex

# If you try doing things with the tr object, you'll discover that it does NOT have a modelStage or
# Model attached to it, so if you.forgot.which.model, you won't be able to get it back from tr
# You'll need to find the model some other way. Everything else that works on VE Results should work
# just fine on "pure" results.
print(results$modelStage$Model)  # The model that "results" came from
print(tr$modelStage)             # NULL: no model attached

# The following copy operations should also work...
results$copy(test.dir,Flatten=FALSE,overwrite=TRUE) # exact copy of just what was built in this stage (not previous stages)

# Copy the Datastore, converting to another DatastoreType
# Flatten is TRUE by default
visioneval::initLog(Save=FALSE,Threshold="info")
results$copy(test.dir,DatastoreType="H5",overwrite=TRUE)
