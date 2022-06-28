# VisionEval

VisionEval is a model system and supporting software framework for building collaborative
disaggregate strategic planning models. 

## Documentation

Documentation for VisionEval is online at
[https://github.com/VisionEval/VisionEval/wiki](https://github.com/VisionEval/VisionEval/wiki)

## Release

You can retrieve the current binary release of VisionEval from
[https://visioneval.org/category/download.html](https://visioneval.org/category/download.html)

## Issues

Please submit issues, bugs, or feature requests about VisionEval on the [VisionEval-Dev issues
page](https://github.com/VisionEval/VisionEval-Dev/issues). 

Please submit issues or content change requests about the VisionEval.org website on the
[VisionEval.org issues page](https://github.com/VisionEval/VisionEval.org/issues).

# For Developers: Building 

To modify and rebuild the released VisionEval system, clone the
[VisionEval repository](https://github.com/VisionEval/VisionEval). 

If you intend to submit changes back to the VisionEval project, please clone the [VisionEval-Dev
repository, `development-next` branch](https://github.com/VisionEval/VisionEval-Dev/tree/development).
Pull requests against this branch are welcome (but make sure you have rebased the pull request on
the current HEAD of `development-next`).

Pre-built binary installers of recently released versions (the "master" branch) are available at
[https://visioneval.org](https://visioneval.org) and as "releases" in either the VisionEval
repository (the `master` branch) or in VisionEval-dev (the `development-next` branch).

You can install directly from a copy (.zip) or clone of this VisionEval repository branch, using the
instructions in the `build/Building.md` file on a VisionEval code branch.

# PSRC Edits
The standard set of VisionEval code uses national NHTS data and PUMS records from Oregon. This version updates the PUMS records with local records. Some work was done to update survey records with PSRC data, but this work is currently incomplete. See the sections below for the latest information on these updates. 

## PUMS Data

## Survey Data
PSRC survey data was converted to NHTS format for use in model estimation. However, builds have not been successful using this data likely to some data inconsistencies in the conversion process. As we work through this, we will directly calibrate the models by updating the R code as discussed below. 

# Calibration
Household travel models were updated with coefficients borrowed from SANDAG's VisionEval implementation: https://github.com/SANDAG/SanVE. These will be further refined to match PSRC survey targets. Factors were added to 4 R files in the HouseholdTravel module. 

# Rebuilding
After making the above changes, a new version of VisionEval must be built to incorporate the changes. To run VisionEval, first build using the above instructions and then run using the PSRC input files. 
