


rural_area <- c("530330234031","530330234041","530330234042","530330250071",
              "530330250073","530330250081","530330250082","530330322073")
urban_area <- c("530330075031")

df <- load('C:/Workspace/VisionEval/models/VERSPM/Datastore/2018/Household/Bzone.Rda')

# Get index of households to edit
# hh_index <- result['Dataset'][result['Dataset']['Dataset'].isin(rural_area)].index


# Reset household's Bzone to be in a specific zone in First hill Seattle
# result['Dataset'].loc[result['Dataset']['Dataset'].isin(rural_area),'Dataset'] = '530330075031'
# write_rdata