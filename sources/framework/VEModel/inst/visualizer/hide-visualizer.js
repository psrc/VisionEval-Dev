scentitle = "Not displayed in original viewer version",
  catconfig = [
    {
      "NAME": ["Community Design"],
      "DESCRIPTION": ["Local policies to enable shorter trips and travel by alternate modes."],
      "LEVELS": [
        {
          "NAME": ["1"],
          "INPUTS": [
            {
              "NAME": ["L"],
              "LEVEL": ["1"]
            },
            {
              "NAME": ["B"],
              "LEVEL": ["1"]
            },
            {
              "NAME": ["T"],
              "LEVEL": ["1"]
            },
            {
              "NAME": ["P"],
              "LEVEL": ["1"]
            }
          ]
        },
        {
          "NAME": ["2"],
          "INPUTS": [
            {
              "NAME": ["L"],
              "LEVEL": ["2"]
            },
            {
              "NAME": ["B"],
              "LEVEL": ["1"]
            },
            {
              "NAME": ["T"],
              "LEVEL": ["2"]
            },
            {
              "NAME": ["P"],
              "LEVEL": ["1"]
            }
          ]
        },
        {
          "NAME": ["3"],
          "INPUTS": [
            {
              "NAME": ["L"],
              "LEVEL": ["2"]
            },
            {
              "NAME": ["B"],
              "LEVEL": ["1"]
            },
            {
              "NAME": ["T"],
              "LEVEL": ["3"]
            },
            {
              "NAME": ["P"],
              "LEVEL": ["2"]
            }
          ]
        },
        {
          "NAME": ["4"],
          "INPUTS": [
            {
              "NAME": ["L"],
              "LEVEL": ["2"]
            },
            {
              "NAME": ["B"],
              "LEVEL": ["2"]
            },
            {
              "NAME": ["T"],
              "LEVEL": ["3"]
            },
            {
              "NAME": ["P"],
              "LEVEL": ["2"]
            }
          ]
        }
      ]
    },
    {
      "NAME": ["Marketing/Incentive"],
      "DESCRIPTION": ["Local programs to improve driving efficiency & reduce auto demand."],
      "LEVELS": [
        {
          "NAME": ["1"],
          "INPUTS": [
            {
              "NAME": ["D"],
              "LEVEL": ["1"]
            },
            {
              "NAME": ["E"],
              "LEVEL": ["1"]
            }
          ]
        },
        {
          "NAME": ["2"],
          "INPUTS": [
            {
              "NAME": ["D"],
              "LEVEL": ["2"]
            },
            {
              "NAME": ["E"],
              "LEVEL": ["2"]
            }
          ]
        }
      ]
    },
    {
      "NAME": ["Pricing"],
      "DESCRIPTION": ["State-led policies that move towards true cost pricing."],
      "LEVELS": [
        {
          "NAME": ["1"],
          "INPUTS": [
            {
              "NAME": ["C"],
              "LEVEL": ["1"]
            }
          ]
        },
        {
          "NAME": ["2"],
          "INPUTS": [
            {
              "NAME": ["C"],
              "LEVEL": ["2"]
            }
          ]
        },
        {
          "NAME": ["3"],
          "INPUTS": [
            {
              "NAME": ["C"],
              "LEVEL": ["3"]
            }
          ]
        }
      ]
    },
    {
      "NAME": ["Vehicles/Fuels"],
      "DESCRIPTION": ["Factors representing changes to future vehicles and fuels."],
      "LEVELS": [
        {
          "NAME": ["0"],
          "INPUTS": [
            {
              "NAME": ["V"],
              "LEVEL": ["1"]
            },
            {
              "NAME": ["F"],
              "LEVEL": ["1"]
            }
          ]
        },
        {
          "NAME": ["1"],
          "INPUTS": [
            {
              "NAME": ["V"],
              "LEVEL": ["2"]
            },
            {
              "NAME": ["F"],
              "LEVEL": ["1"]
            }
          ]
        },
        {
          "NAME": ["2"],
          "INPUTS": [
            {
              "NAME": ["V"],
              "LEVEL": ["2"]
            },
            {
              "NAME": ["F"],
              "LEVEL": ["2"]
            }
          ]
        }
      ]
    },
    {
      "NAME": ["Fuel Price"],
      "DESCRIPTION": ["Context factor on the assumed market price of gasoline (exclusive of fuel taxes.)"],
      "LEVELS": [
        {
          "NAME": ["0"],
          "INPUTS": [
            {
              "NAME": ["G"],
              "LEVEL": ["1"]
            }
          ]
        },
        {
          "NAME": ["1"],
          "INPUTS": [
            {
              "NAME": ["G"],
              "LEVEL": ["2"]
            }
          ]
        },
        {
          "NAME": ["2"],
          "INPUTS": [
            {
              "NAME": ["G"],
              "LEVEL": ["3"]
            }
          ]
        }
      ]
    },
    {
      "NAME": ["Income"],
      "DESCRIPTION": ["Context factor on the assumed growth of statewide average per capita income."],
      "LEVELS": [
        {
          "NAME": ["0"],
          "INPUTS": [
            {
              "NAME": ["I"],
              "LEVEL": ["1"]
            }
          ]
        },
        {
          "NAME": ["1"],
          "INPUTS": [
            {
              "NAME": ["I"],
              "LEVEL": ["2"]
            }
          ]
        },
        {
          "NAME": ["2"],
          "INPUTS": [
            {
              "NAME": ["I"],
              "LEVEL": ["3"]
            }
          ]
        }
      ]
    }
  ],
  scenconfig = [
  {
    "NAME": ["B"],
    "LABEL": ["Bicycles"],
    "DESCRIPTION": ["Network improvements, incentives, and technologies that encourage bicycling and other light-weight vehicle travel."],
    "INSTRUCTIONS": ["The diversion of single-occupant vehicle travel to bicycles, electric bicycles and other light-weight vehicles."],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["Current bicyling percentage of SOV tours less than 20 miles (9.75%)"]
      },
      {
        "NAME": ["2"],
        "LABEL": ["Double"],
        "DESCRIPTION": ["Increase diversion of SOV tours to 20%"]
      }
    ]
  },
  {
    "NAME": ["D"],
    "LABEL": ["Demand Management"],
    "DESCRIPTION": ["Programs to encourage less private vehicle travel."],
    "INSTRUCTIONS": ["Programs and incentives which encourage people to drive less including ridesharing, van pooling, telecommuting, and transit subsidies."],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["Existing level"]
      },
      {
        "NAME": ["2"],
        "LABEL": ["EcoProp & ImpProp"],
        "DESCRIPTION": ["Increased the proportion by 10%"]
      }
    ]
  },
  {
    "NAME": ["L"],
    "LABEL": ["Land Use"],
    "DESCRIPTION": ["Distribution of population and employment by place type."],
    "INSTRUCTIONS": ["The form in which development occurs (density, regional assessibility, mixed use, etc.) represented by the distribution of population and employment by place type."],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["Maintain current distribution."]
      },
      {
        "NAME": ["2"],
        "LABEL": ["Activity Center Growth"],
        "DESCRIPTION": ["LU overlaps with HHsize + Population."]
      }
    ]
  },
  {
    "NAME": ["P"],
    "LABEL": ["Parking"],
    "DESCRIPTION": ["Extent of and charges for priced parking."],
    "INSTRUCTIONS": ["The extent of paid parking and its price."],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["Current extent and daily fee."]
      },
      {
        "NAME": ["2"],
        "LABEL": ["Increase parking cost and proportion"],
        "DESCRIPTION": ["Increase parking cost by 100% and proportion charted by 10%."]
      }
    ]
  },
  {
    "NAME": ["T"],
    "LABEL": ["Transit"],
    "DESCRIPTION": ["Level of public transit service."],
    "INSTRUCTIONS": ["The extent and frequency of transit service."],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["Current public transit service level."]
      },
      {
        "NAME": ["2"],
        "LABEL": ["Double"],
        "DESCRIPTION": ["Double public transit service level."]
      },
      {
        "NAME": ["3"],
        "LABEL": ["Triple"],
        "DESCRIPTION": ["Quadruple public transit service level."]
      }
    ]
  },
  {
    "NAME": ["C"],
    "LABEL": ["Vehicle Travel Cost"],
    "DESCRIPTION": ["Combination of fuel prices and charges to pay for roadway costs and possibly externalities."],
    "INSTRUCTIONS": ["The combination of fuel prices and vehicle travel charges to pay for roadways and to pay for externalities such as carbon pricing."],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["No change in fuel prices or increase in roadway or externality charges."]
      },
      {
        "NAME": ["2"],
        "LABEL": ["Steady Ownership Cost/Tax"],
        "DESCRIPTION": ["Keep the vehicle ownerhsip cost the same."]
      },
      {
        "NAME": ["3"],
        "LABEL": ["Payd insurance and higher cost"],
        "DESCRIPTION": ["Higher climate cost and pay as you drive insurance."]
      }
    ]
  },
  {
    "NAME": ["V"],
    "LABEL": ["Vehicle Characteristics"],
    "DESCRIPTION": ["Proportions of light trucks and average vehicle age"],
    "INSTRUCTIONS": ["The combination of fuel prices and vehicle travel charges to pay for roadways and to pay for externalities such as carbon pricing."],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["Light truck proportion remains 45% of the fleet and the average vehicle age remains 12 years."]
      },
      {
        "NAME": ["2"],
        "LABEL": ["Reduced"],
        "DESCRIPTION": ["Light truck proportion at 35% of the fleet and the average vehicle age at 8 years."]
      }
    ]
  },
  {
    "NAME": ["F"],
    "LABEL": ["Technology Mix and CI"],
    "DESCRIPTION": ["Vehicle technology mix and carbon intensity of fuels."],
    "INSTRUCTIONS": [""],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["Baseline vehicle technology mix."]
      },
      {
        "NAME": ["2"],
        "LABEL": ["Higher Electric"],
        "DESCRIPTION": ["Increased percentage of electric vehicles in household and commercial setting by 20%."]
      }
    ]
  },
  {
    "NAME": ["E"],
    "LABEL": ["Driving Efficiency"],
    "DESCRIPTION": ["Driving efficiency by increasing implementation of ITS."],
    "INSTRUCTIONS": [""],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["Baseline implementation of ITS."]
      },
      {
        "NAME": ["2"],
        "LABEL": ["Fully implemented ITS"],
        "DESCRIPTION": ["Increase the effectiveness of implementation of ITS."]
      }
    ]
  },
  {
    "NAME": ["G"],
    "LABEL": ["Fuel Price"],
    "DESCRIPTION": ["Real fuel price in 2010 USD."],
    "INSTRUCTIONS": [""],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["Baseline fuel price."]
      },
      {
        "NAME": ["2"],
        "LABEL": ["Double fuel price"],
        "DESCRIPTION": ["Real fuel price doubles."]
      },
      {
        "NAME": ["3"],
        "LABEL": ["Quadruple fuel price"],
        "DESCRIPTION": ["Real fuel price quadruples."]
      }
    ]
  },
  {
    "NAME": ["I"],
    "LABEL": ["Income"],
    "DESCRIPTION": ["Real average household income in 2010 USD."],
    "INSTRUCTIONS": [""],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["Baseline household income."]
      },
      {
        "NAME": ["2"],
        "LABEL": ["Income growth 1"],
        "DESCRIPTION": ["Income growth of 7% w.r.t reference."]
      },
      {
        "NAME": ["3"],
        "LABEL": ["Income growth 2"],
        "DESCRIPTION": ["Income growth of 14% w.r.t reference."]
      }
    ]
  }
],
  outputconfig = [
  {
    "DISPLAYNAME": "DVMT Per Capita",
    "LABEL": "Daily Vehicle Miles Traveled",
    "DESCRIPTION": "daily vehicle miles of travel of residents divided by population.",
    "INSTRUCTIONS": "daily vehicle miles of travel of residents divided by population.",
    "METRIC": "Average",
    "UNIT": "daily miles",
    "NAME": "DVMTPerCapita"
  },
  // {
  //   "DISPLAYNAME": "GHG Target Reduction",
  //   "LABEL": "GHG Target Reduction",
  //   "DESCRIPTION": "Placeholder - 2005-2038 percentage reduction in light-duty vehicle GHG emissions (beyond what is anticipated to occur due to baseline assumptions regarding improvements to vehiles and fuels). RVMPO has a 2005 - 2035 state-set GHG reduction target of 19%",
  //   "INSTRUCTIONS": "Placeholder - 2005-2038 percentage reduction in light-duty vehicle GHG emissions (beyond what is anticipated to occur due to baseline assumptions regarding improvements to vehiles and fuels). RVMPO has a 2005 - 2035 state-set GHG reduction target of 19%",
  //   "METRIC": "Average",
  //   "UNIT": "%",
  //   "NAME": "GHGReduction"
  // },
  {
    "DISPLAYNAME": "Walk Trips Per Capita",
    "LABEL": "Walk Travel Per Capita",
    "DESCRIPTION": "annual residents walk trips (not including recreation or walk to transit) divided by population",
    "INSTRUCTIONS": "annual residents walk trips (not including recreation or walk to transit) divided by population",
    "METRIC": "Average",
    "UNIT": "annual trips",
    "NAME": "WalkTravelPerCapita",
    "XTICKS" : 3
  },
  {
    "DISPLAYNAME": "Air Pollution Emissions",
    "LABEL": "Air Pollution Emissions",
    "DESCRIPTION": "daily metric tons of pollutants emitted from all light-duty vehicle travel (including hydrocarbons, carbon monoxide, nitrogen dioxide, and particulates).",
    "INSTRUCTIONS": "daily metric tons of pollutants emitted from all light-duty vehicle travel (including hydrocarbons, carbon monoxide, nitrogen dioxide, and particulates).",
    "METRIC": "Average",
    "UNIT": "daily metric tons",
    "NAME": "AirPollutionEm",
    "XTICKS" : 3
  },
  {
    "DISPLAYNAME": "Annual Fuel Use",
    "LABEL": "Annual Fuel Use",
    "DESCRIPTION": "annual million gallons of gasoline and other fuels consumed by all light-duty vehicle travel.",
    "INSTRUCTIONS": "annual million gallons of gasoline and other fuels consumed by all light-duty vehicle travel.",
    "METRIC": "Average",
    "UNIT": "million gallons",
    "NAME": "FuelUse",
    "XTICKS" : 3
  },
  // {
  //   "DISPLAYNAME": "Truck Delay",
  //   "LABEL": "Truck Delay",
  //   "DESCRIPTION": "daily vehicle-hours of delay for heavy truck travel on area roads.",
  //   "INSTRUCTIONS": "daily vehicle-hours of delay for heavy truck travel on area roads.",
  //   "METRIC": "Average",
  //   "UNIT": "daily vehicle hr.",
  //   "NAME": "TruckDelay",
  //   "XTICKS" : 5
  // },
  {
    "DISPLAYNAME": "Household Vehicle Cost as Percentage of Income",
    "LABEL": "Vehicle Cost % (All Income)",
    "DESCRIPTION": "average percentage of income spent by all households on owning and operating light-duty vehicles.",
    "INSTRUCTIONS": "average percentage of income spent by all households on owning and operating light-duty vehicles.",
    "METRIC": "Average",
    "UNIT": "%",
    "NAME": "VehicleCost",
    "XTICKS" : 5
  },
  {
    "DISPLAYNAME": "Low Income Household Vehicle Cost as Percentage of Income",
    "LABEL": "Vehicle Cost % (Low Income)",
    "DESCRIPTION": "average percentage of income spent by low-income (< $20,000 USD2005) households on owning and operating light-duty vehicles.",
    "INSTRUCTIONS": "average percentage of income spent by low-income (< $20,000 USD2005) households on owning and operating light-duty vehicles.",
    "METRIC": "Average",
    "UNIT": "%",
    "NAME": "VehicleCostLow",
    "XTICKS" : 5
  }
],
  VEdata = [
  {"Scenario":"B1C1D1E1F1G1I1L1P1T1V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.6096,"WalkTravelPerCapita":0.3489,"TruckDelay":0,"AirPollutionEm":802362.5458,"FuelUse":35078019.0482,"VehicleCost":4.5443,"VehicleCostLow":23.9726},
  {"Scenario":"B1C1D1E1F1G1I1L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.7694,"WalkTravelPerCapita":0.3481,"TruckDelay":0,"AirPollutionEm":747143.5295,"FuelUse":32764462.6057,"VehicleCost":4.9181,"VehicleCostLow":26.033},
  {"Scenario":"B1C1D1E1F1G1I1L2P1T2V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":18.2711,"WalkTravelPerCapita":0.3589,"TruckDelay":0,"AirPollutionEm":770534.4713,"FuelUse":33825723.3276,"VehicleCost":4.3573,"VehicleCostLow":24.6553},
  {"Scenario":"B1C1D1E1F1G1I1L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.4381,"WalkTravelPerCapita":0.3579,"TruckDelay":0,"AirPollutionEm":719534.7123,"FuelUse":31687591.6449,"VehicleCost":4.712,"VehicleCostLow":26.7824},
  {"Scenario":"B1C1D1E1F1G1I1L2P2T3V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.918,"WalkTravelPerCapita":0.3836,"TruckDelay":0,"AirPollutionEm":712148.1776,"FuelUse":31373364.5612,"VehicleCost":4.2167,"VehicleCostLow":22.3181},
  {"Scenario":"B1C1D1E1F1G1I1L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":17.082,"WalkTravelPerCapita":0.3826,"TruckDelay":0,"AirPollutionEm":666561.124,"FuelUse":29463188.9251,"VehicleCost":4.5677,"VehicleCostLow":24.0951},
  {"Scenario":"B1C1D1E1F1G1I2L1P1T1V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.6604,"WalkTravelPerCapita":0.3532,"TruckDelay":0,"AirPollutionEm":801629.9985,"FuelUse":35046231.2402,"VehicleCost":4.2212,"VehicleCostLow":24.1207},
  {"Scenario":"B1C1D1E1F1G1I2L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.8119,"WalkTravelPerCapita":0.3524,"TruckDelay":0,"AirPollutionEm":747188.524,"FuelUse":32765023.9458,"VehicleCost":4.5685,"VehicleCostLow":26.277},
  {"Scenario":"B1C1D1E1F1G1I2L2P1T2V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":18.1675,"WalkTravelPerCapita":0.3648,"TruckDelay":0,"AirPollutionEm":763946.429,"FuelUse":33551748.842,"VehicleCost":4.0254,"VehicleCostLow":24.8218},
  {"Scenario":"B1C1D1E1F1G1I2L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.3291,"WalkTravelPerCapita":0.364,"TruckDelay":0,"AirPollutionEm":714019.6142,"FuelUse":31459729.2863,"VehicleCost":4.3538,"VehicleCostLow":26.8765},
  {"Scenario":"B1C1D1E1F1G1I2L2P2T3V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.8439,"WalkTravelPerCapita":0.3896,"TruckDelay":0,"AirPollutionEm":706652.0653,"FuelUse":31145900.177,"VehicleCost":3.8953,"VehicleCostLow":22.5142},
  {"Scenario":"B1C1D1E1F1G1I2L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":17.0067,"WalkTravelPerCapita":0.3886,"TruckDelay":0,"AirPollutionEm":661377.7674,"FuelUse":29247434.6284,"VehicleCost":4.2159,"VehicleCostLow":24.3862},
  {"Scenario":"B1C1D1E1F1G1I3L1P1T1V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.625,"WalkTravelPerCapita":0.3573,"TruckDelay":0,"AirPollutionEm":798124.5546,"FuelUse":34900908.9495,"VehicleCost":3.959,"VehicleCostLow":24.4184},
  {"Scenario":"B1C1D1E1F1G1I3L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.7693,"WalkTravelPerCapita":0.3565,"TruckDelay":0,"AirPollutionEm":744186.5802,"FuelUse":32640909.5269,"VehicleCost":4.279,"VehicleCostLow":26.5774},
  {"Scenario":"B1C1D1E1F1G1I3L2P1T2V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":18.194,"WalkTravelPerCapita":0.3683,"TruckDelay":0,"AirPollutionEm":763625.7255,"FuelUse":33538890.5522,"VehicleCost":3.7677,"VehicleCostLow":25.063},
  {"Scenario":"B1C1D1E1F1G1I3L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.3434,"WalkTravelPerCapita":0.3675,"TruckDelay":0,"AirPollutionEm":713702.4067,"FuelUse":31444610.4691,"VehicleCost":4.0697,"VehicleCostLow":27.2128},
  {"Scenario":"B1C1D1E1F1G1I3L2P2T3V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.8747,"WalkTravelPerCapita":0.393,"TruckDelay":0,"AirPollutionEm":706356.6502,"FuelUse":31132613.5781,"VehicleCost":3.6444,"VehicleCostLow":22.7599},
  {"Scenario":"B1C1D1E1F1G1I3L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":17.0283,"WalkTravelPerCapita":0.3921,"TruckDelay":0,"AirPollutionEm":661886.1777,"FuelUse":29269332.1857,"VehicleCost":3.9311,"VehicleCostLow":24.5085},
  {"Scenario":"B1C1D1E1F1G2I1L1P1T1V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":17.898,"WalkTravelPerCapita":0.3585,"TruckDelay":0,"AirPollutionEm":720356.7897,"FuelUse":31671540.7052,"VehicleCost":4.5463,"VehicleCostLow":23.9755},
  {"Scenario":"B1C1D1E1F1G2I1L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.244,"WalkTravelPerCapita":0.3566,"TruckDelay":0,"AirPollutionEm":681907.5069,"FuelUse":30056355.7824,"VehicleCost":4.92,"VehicleCostLow":26.0361},
  {"Scenario":"B1C1D1E1F1G2I1L2P1T2V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.4867,"WalkTravelPerCapita":0.3693,"TruckDelay":0,"AirPollutionEm":684018.8773,"FuelUse":30233008.5501,"VehicleCost":4.359,"VehicleCostLow":24.658},
  {"Scenario":"B1C1D1E1F1G2I1L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.8313,"WalkTravelPerCapita":0.3673,"TruckDelay":0,"AirPollutionEm":649592.3753,"FuelUse":28785126.4856,"VehicleCost":4.7137,"VehicleCostLow":26.7852},
  {"Scenario":"B1C1D1E1F1G2I1L2P2T3V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.1971,"WalkTravelPerCapita":0.395,"TruckDelay":0,"AirPollutionEm":629517.0985,"FuelUse":27942352.839,"VehicleCost":4.2182,"VehicleCostLow":22.3201},
  {"Scenario":"B1C1D1E1F1G2I1L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.5093,"WalkTravelPerCapita":0.3929,"TruckDelay":0,"AirPollutionEm":598579.2008,"FuelUse":26642500.0667,"VehicleCost":4.5692,"VehicleCostLow":24.0972},
  {"Scenario":"B1C1D1E1F1G2I2L1P1T1V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":18.0169,"WalkTravelPerCapita":0.3625,"TruckDelay":0,"AirPollutionEm":723067.8306,"FuelUse":31783128.8786,"VehicleCost":4.2231,"VehicleCostLow":24.1236},
  {"Scenario":"B1C1D1E1F1G2I2L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.3448,"WalkTravelPerCapita":0.3606,"TruckDelay":0,"AirPollutionEm":684465.7724,"FuelUse":30161130.3859,"VehicleCost":4.5704,"VehicleCostLow":26.2801},
  {"Scenario":"B1C1D1E1F1G2I2L2P1T2V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.4433,"WalkTravelPerCapita":0.375,"TruckDelay":0,"AirPollutionEm":680339.934,"FuelUse":30079848.7685,"VehicleCost":4.027,"VehicleCostLow":24.8243},
  {"Scenario":"B1C1D1E1F1G2I2L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.7773,"WalkTravelPerCapita":0.373,"TruckDelay":0,"AirPollutionEm":646460.4215,"FuelUse":28655793.8241,"VehicleCost":4.3554,"VehicleCostLow":26.8792},
  {"Scenario":"B1C1D1E1F1G2I2L2P2T3V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.1682,"WalkTravelPerCapita":0.4007,"TruckDelay":0,"AirPollutionEm":626147.2285,"FuelUse":27803206.2285,"VehicleCost":3.8967,"VehicleCostLow":22.516},
  {"Scenario":"B1C1D1E1F1G2I2L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4816,"WalkTravelPerCapita":0.3986,"TruckDelay":0,"AirPollutionEm":595542.6559,"FuelUse":26515320.1157,"VehicleCost":4.2173,"VehicleCostLow":24.3882},
  {"Scenario":"B1C1D1E1F1G2I3L1P1T1V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":18.0275,"WalkTravelPerCapita":0.3663,"TruckDelay":0,"AirPollutionEm":721826.583,"FuelUse":31732113.6943,"VehicleCost":3.9608,"VehicleCostLow":24.4213},
  {"Scenario":"B1C1D1E1F1G2I3L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.3483,"WalkTravelPerCapita":0.3645,"TruckDelay":0,"AirPollutionEm":683504.0265,"FuelUse":30121608.6945,"VehicleCost":4.2807,"VehicleCostLow":26.5804},
  {"Scenario":"B1C1D1E1F1G2I3L2P1T2V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.5302,"WalkTravelPerCapita":0.3781,"TruckDelay":0,"AirPollutionEm":682851.6792,"FuelUse":30184539.8662,"VehicleCost":3.7692,"VehicleCostLow":25.0656},
  {"Scenario":"B1C1D1E1F1G2I3L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.8542,"WalkTravelPerCapita":0.3762,"TruckDelay":0,"AirPollutionEm":648793.9444,"FuelUse":28750697.7359,"VehicleCost":4.0713,"VehicleCostLow":27.2155},
  {"Scenario":"B1C1D1E1F1G2I3L2P2T3V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.2613,"WalkTravelPerCapita":0.4038,"TruckDelay":0,"AirPollutionEm":628872.4397,"FuelUse":27915332.5907,"VehicleCost":3.6457,"VehicleCostLow":22.7618},
  {"Scenario":"B1C1D1E1F1G2I3L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.5646,"WalkTravelPerCapita":0.4018,"TruckDelay":0,"AirPollutionEm":598719.9921,"FuelUse":26647876.1342,"VehicleCost":3.9324,"VehicleCostLow":24.5106},
  {"Scenario":"B1C1D1E1F1G3I1L1P1T1V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":14.7462,"WalkTravelPerCapita":0.3782,"TruckDelay":0,"AirPollutionEm":577456.4296,"FuelUse":25737994.1537,"VehicleCost":4.5483,"VehicleCostLow":23.9769},
  {"Scenario":"B1C1D1E1F1G3I1L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.2595,"WalkTravelPerCapita":0.3746,"TruckDelay":0,"AirPollutionEm":559015.1439,"FuelUse":24956786.7738,"VehicleCost":4.922,"VehicleCostLow":26.0377},
  {"Scenario":"B1C1D1E1F1G3I1L2P1T2V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.3933,"WalkTravelPerCapita":0.3896,"TruckDelay":0,"AirPollutionEm":541525.6787,"FuelUse":24317849.9947,"VehicleCost":4.3606,"VehicleCostLow":24.6593},
  {"Scenario":"B1C1D1E1F1G3I1L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8736,"WalkTravelPerCapita":0.386,"TruckDelay":0,"AirPollutionEm":525370.5404,"FuelUse":23632127.7105,"VehicleCost":4.7153,"VehicleCostLow":26.7867},
  {"Scenario":"B1C1D1E1F1G3I1L2P2T3V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.2975,"WalkTravelPerCapita":0.4165,"TruckDelay":0,"AirPollutionEm":496819.9577,"FuelUse":22434262.6843,"VehicleCost":4.2195,"VehicleCostLow":22.321},
  {"Scenario":"B1C1D1E1F1G3I1L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7294,"WalkTravelPerCapita":0.4129,"TruckDelay":0,"AirPollutionEm":482116.6774,"FuelUse":21811323.0042,"VehicleCost":4.5707,"VehicleCostLow":24.0981},
  {"Scenario":"B1C1D1E1F1G3I2L1P1T1V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":14.9336,"WalkTravelPerCapita":0.3816,"TruckDelay":0,"AirPollutionEm":583645.2371,"FuelUse":25994036.2311,"VehicleCost":4.2249,"VehicleCostLow":24.125},
  {"Scenario":"B1C1D1E1F1G3I2L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.4369,"WalkTravelPerCapita":0.3781,"TruckDelay":0,"AirPollutionEm":564764.9914,"FuelUse":25193926.3032,"VehicleCost":4.5723,"VehicleCostLow":26.2816},
  {"Scenario":"B1C1D1E1F1G3I2L2P1T2V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.4285,"WalkTravelPerCapita":0.3948,"TruckDelay":0,"AirPollutionEm":541487.8353,"FuelUse":24315709.924,"VehicleCost":4.0285,"VehicleCostLow":24.8256},
  {"Scenario":"B1C1D1E1F1G3I2L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8908,"WalkTravelPerCapita":0.3914,"TruckDelay":0,"AirPollutionEm":525112.0979,"FuelUse":23621281.9132,"VehicleCost":4.357,"VehicleCostLow":26.8805},
  {"Scenario":"B1C1D1E1F1G3I2L2P2T3V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.3411,"WalkTravelPerCapita":0.4216,"TruckDelay":0,"AirPollutionEm":496768.4124,"FuelUse":22432498.1225,"VehicleCost":3.8981,"VehicleCostLow":22.5168},
  {"Scenario":"B1C1D1E1F1G3I2L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7701,"WalkTravelPerCapita":0.4181,"TruckDelay":0,"AirPollutionEm":482083.6632,"FuelUse":21808338.0995,"VehicleCost":4.2187,"VehicleCostLow":24.3891},
  {"Scenario":"B1C1D1E1F1G3I3L1P1T1V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":15.0224,"WalkTravelPerCapita":0.3849,"TruckDelay":0,"AirPollutionEm":585973.604,"FuelUse":26091502.7646,"VehicleCost":3.9626,"VehicleCostLow":24.4227},
  {"Scenario":"B1C1D1E1F1G3I3L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.5152,"WalkTravelPerCapita":0.3816,"TruckDelay":0,"AirPollutionEm":566914.0312,"FuelUse":25283131.5507,"VehicleCost":4.2826,"VehicleCostLow":26.582},
  {"Scenario":"B1C1D1E1F1G3I3L2P1T2V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.5836,"WalkTravelPerCapita":0.3973,"TruckDelay":0,"AirPollutionEm":547073.5786,"FuelUse":24547949.5544,"VehicleCost":3.7707,"VehicleCostLow":25.0669},
  {"Scenario":"B1C1D1E1F1G3I3L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":14.0381,"WalkTravelPerCapita":0.3941,"TruckDelay":0,"AirPollutionEm":530457.6928,"FuelUse":23841585.1707,"VehicleCost":4.0728,"VehicleCostLow":27.217},
  {"Scenario":"B1C1D1E1F1G3I3L2P2T3V1","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.4906,"WalkTravelPerCapita":0.4242,"TruckDelay":0,"AirPollutionEm":502084.3204,"FuelUse":22652356.767,"VehicleCost":3.647,"VehicleCostLow":22.7627},
  {"Scenario":"B1C1D1E1F1G3I3L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.9021,"WalkTravelPerCapita":0.4208,"TruckDelay":0,"AirPollutionEm":487204.3054,"FuelUse":22021386.128,"VehicleCost":3.9337,"VehicleCostLow":24.5116},
  {"Scenario":"B1C1D1E1F2G1I1L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"1","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.7708,"WalkTravelPerCapita":0.3481,"TruckDelay":0,"AirPollutionEm":745775.9418,"FuelUse":32566113.3294,"VehicleCost":4.9181,"VehicleCostLow":26.033},
  {"Scenario":"B1C1D1E1F2G1I1L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"1","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.4398,"WalkTravelPerCapita":0.3579,"TruckDelay":0,"AirPollutionEm":717761.7499,"FuelUse":31466767.5081,"VehicleCost":4.712,"VehicleCostLow":26.7824},
  {"Scenario":"B1C1D1E1F2G1I1L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":17.0839,"WalkTravelPerCapita":0.3825,"TruckDelay":0,"AirPollutionEm":664619.4633,"FuelUse":29237302.9992,"VehicleCost":4.5677,"VehicleCostLow":24.0951},
  {"Scenario":"B1C1D1E1F2G1I2L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"1","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.8134,"WalkTravelPerCapita":0.3523,"TruckDelay":0,"AirPollutionEm":745606.5651,"FuelUse":32557914.7727,"VehicleCost":4.5685,"VehicleCostLow":26.277},
  {"Scenario":"B1C1D1E1F2G1I2L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"1","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.3309,"WalkTravelPerCapita":0.3639,"TruckDelay":0,"AirPollutionEm":711952.5464,"FuelUse":31226696.1282,"VehicleCost":4.3538,"VehicleCostLow":26.8765},
  {"Scenario":"B1C1D1E1F2G1I2L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":17.0087,"WalkTravelPerCapita":0.3885,"TruckDelay":0,"AirPollutionEm":659137.5397,"FuelUse":29009170.7835,"VehicleCost":4.2159,"VehicleCostLow":24.3862},
  {"Scenario":"B1C1D1E1F2G1I3L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"1","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.7709,"WalkTravelPerCapita":0.3565,"TruckDelay":0,"AirPollutionEm":742388.9361,"FuelUse":32424890.5735,"VehicleCost":4.279,"VehicleCostLow":26.5774},
  {"Scenario":"B1C1D1E1F2G1I3L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"1","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.3452,"WalkTravelPerCapita":0.3674,"TruckDelay":0,"AirPollutionEm":711450.9159,"FuelUse":31204033.3581,"VehicleCost":4.0697,"VehicleCostLow":27.2128},
  {"Scenario":"B1C1D1E1F2G1I3L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":17.0303,"WalkTravelPerCapita":0.392,"TruckDelay":0,"AirPollutionEm":659458.1539,"FuelUse":29023385.3411,"VehicleCost":3.9311,"VehicleCostLow":24.5085},
  {"Scenario":"B1C1D1E1F2G2I1L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"2","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.2464,"WalkTravelPerCapita":0.3565,"TruckDelay":0,"AirPollutionEm":680630.0208,"FuelUse":29860886.467,"VehicleCost":4.92,"VehicleCostLow":26.0361},
  {"Scenario":"B1C1D1E1F2G2I1L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"2","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.8343,"WalkTravelPerCapita":0.3672,"TruckDelay":0,"AirPollutionEm":647933.6974,"FuelUse":28568004.547,"VehicleCost":4.7137,"VehicleCostLow":26.7852},
  {"Scenario":"B1C1D1E1F2G2I1L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.5126,"WalkTravelPerCapita":0.3928,"TruckDelay":0,"AirPollutionEm":596764.3187,"FuelUse":26420796.4501,"VehicleCost":4.5692,"VehicleCostLow":24.0972},
  {"Scenario":"B1C1D1E1F2G2I2L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"2","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.3473,"WalkTravelPerCapita":0.3606,"TruckDelay":0,"AirPollutionEm":682978.1722,"FuelUse":29957124.4266,"VehicleCost":4.5704,"VehicleCostLow":26.2801},
  {"Scenario":"B1C1D1E1F2G2I2L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"2","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.7805,"WalkTravelPerCapita":0.3729,"TruckDelay":0,"AirPollutionEm":644516.0341,"FuelUse":28426854.3098,"VehicleCost":4.3554,"VehicleCostLow":26.8792},
  {"Scenario":"B1C1D1E1F2G2I2L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4851,"WalkTravelPerCapita":0.3985,"TruckDelay":0,"AirPollutionEm":593436.4639,"FuelUse":26281585.3554,"VehicleCost":4.2173,"VehicleCostLow":24.3882},
  {"Scenario":"B1C1D1E1F2G2I3L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"2","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.351,"WalkTravelPerCapita":0.3645,"TruckDelay":0,"AirPollutionEm":681805.3411,"FuelUse":29908917.1834,"VehicleCost":4.2807,"VehicleCostLow":26.5804},
  {"Scenario":"B1C1D1E1F2G2I3L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"2","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.8574,"WalkTravelPerCapita":0.3761,"TruckDelay":0,"AirPollutionEm":646665.3625,"FuelUse":28514280.8762,"VehicleCost":4.0713,"VehicleCostLow":27.2155},
  {"Scenario":"B1C1D1E1F2G2I3L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.5682,"WalkTravelPerCapita":0.4017,"TruckDelay":0,"AirPollutionEm":596427.0564,"FuelUse":26406562.2666,"VehicleCost":3.9324,"VehicleCostLow":24.5106},
  {"Scenario":"B1C1D1E1F2G3I1L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"3","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.2633,"WalkTravelPerCapita":0.3745,"TruckDelay":0,"AirPollutionEm":557865.8272,"FuelUse":24764475.9742,"VehicleCost":4.922,"VehicleCostLow":26.0377},
  {"Scenario":"B1C1D1E1F2G3I1L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"3","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8782,"WalkTravelPerCapita":0.3859,"TruckDelay":0,"AirPollutionEm":523875.6452,"FuelUse":23419332.1312,"VehicleCost":4.7153,"VehicleCostLow":26.7867},
  {"Scenario":"B1C1D1E1F2G3I1L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7346,"WalkTravelPerCapita":0.4127,"TruckDelay":0,"AirPollutionEm":480483.2165,"FuelUse":21594764.8079,"VehicleCost":4.5707,"VehicleCostLow":24.0981},
  {"Scenario":"B1C1D1E1F2G3I2L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"3","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.441,"WalkTravelPerCapita":0.378,"TruckDelay":0,"AirPollutionEm":563414.2796,"FuelUse":24993543.0194,"VehicleCost":4.5723,"VehicleCostLow":26.2816},
  {"Scenario":"B1C1D1E1F2G3I2L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"3","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8959,"WalkTravelPerCapita":0.3912,"TruckDelay":0,"AirPollutionEm":523346.8253,"FuelUse":23397378.7253,"VehicleCost":4.357,"VehicleCostLow":26.8805},
  {"Scenario":"B1C1D1E1F2G3I2L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7758,"WalkTravelPerCapita":0.4179,"TruckDelay":0,"AirPollutionEm":480174.8499,"FuelUse":21580479.6003,"VehicleCost":4.2187,"VehicleCostLow":24.3891},
  {"Scenario":"B1C1D1E1F2G3I3L1P1T1V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"3","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.5195,"WalkTravelPerCapita":0.3815,"TruckDelay":0,"AirPollutionEm":565360.0444,"FuelUse":25074478.0397,"VehicleCost":4.2826,"VehicleCostLow":26.582},
  {"Scenario":"B1C1D1E1F2G3I3L2P1T2V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"3","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":14.0432,"WalkTravelPerCapita":0.3939,"TruckDelay":0,"AirPollutionEm":528510.175,"FuelUse":23610390.1877,"VehicleCost":4.0728,"VehicleCostLow":27.217},
  {"Scenario":"B1C1D1E1F2G3I3L2P2T3V2","B":"1","C":"1","D":"1","E":"1","F":"2","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.9079,"WalkTravelPerCapita":0.4206,"TruckDelay":0,"AirPollutionEm":485110.5749,"FuelUse":21786095.5727,"VehicleCost":3.9337,"VehicleCostLow":24.5116},
  {"Scenario":"B1C1D2E2F1G1I1L1P1T1V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.4802,"WalkTravelPerCapita":0.3495,"TruckDelay":0,"AirPollutionEm":796815.2706,"FuelUse":34847749.5399,"VehicleCost":4.5443,"VehicleCostLow":23.9724},
  {"Scenario":"B1C1D2E2F1G1I1L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.6361,"WalkTravelPerCapita":0.3487,"TruckDelay":0,"AirPollutionEm":741851.7018,"FuelUse":32544881.2448,"VehicleCost":4.918,"VehicleCostLow":26.0329},
  {"Scenario":"B1C1D2E2F1G1I1L2P1T2V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":18.1562,"WalkTravelPerCapita":0.3593,"TruckDelay":0,"AirPollutionEm":765347.0913,"FuelUse":33609550.6109,"VehicleCost":4.3573,"VehicleCostLow":24.6552},
  {"Scenario":"B1C1D2E2F1G1I1L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.3193,"WalkTravelPerCapita":0.3584,"TruckDelay":0,"AirPollutionEm":714779.2453,"FuelUse":31490943.4892,"VehicleCost":4.7119,"VehicleCostLow":26.7822},
  {"Scenario":"B1C1D2E2F1G1I1L2P2T3V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.8161,"WalkTravelPerCapita":0.3841,"TruckDelay":0,"AirPollutionEm":707709.9637,"FuelUse":31189490.6123,"VehicleCost":4.2166,"VehicleCostLow":22.318},
  {"Scenario":"B1C1D2E2F1G1I1L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.9771,"WalkTravelPerCapita":0.3831,"TruckDelay":0,"AirPollutionEm":662239.7223,"FuelUse":29284273.7628,"VehicleCost":4.5677,"VehicleCostLow":24.0949},
  {"Scenario":"B1C1D2E2F1G1I2L1P1T1V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.5278,"WalkTravelPerCapita":0.3537,"TruckDelay":0,"AirPollutionEm":795953.6297,"FuelUse":34810772.3162,"VehicleCost":4.2211,"VehicleCostLow":24.1205},
  {"Scenario":"B1C1D2E2F1G1I2L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.677,"WalkTravelPerCapita":0.3529,"TruckDelay":0,"AirPollutionEm":741813.6105,"FuelUse":32542209.9197,"VehicleCost":4.5685,"VehicleCostLow":26.2768},
  {"Scenario":"B1C1D2E2F1G1I2L2P1T2V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":18.0687,"WalkTravelPerCapita":0.3652,"TruckDelay":0,"AirPollutionEm":759715.6993,"FuelUse":33377304.8229,"VehicleCost":4.0253,"VehicleCostLow":24.8218},
  {"Scenario":"B1C1D2E2F1G1I2L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.2274,"WalkTravelPerCapita":0.3644,"TruckDelay":0,"AirPollutionEm":709785.109,"FuelUse":31283780.0032,"VehicleCost":4.3538,"VehicleCostLow":26.8765},
  {"Scenario":"B1C1D2E2F1G1I2L2P2T3V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.7622,"WalkTravelPerCapita":0.3899,"TruckDelay":0,"AirPollutionEm":702989.6222,"FuelUse":30993636.3102,"VehicleCost":3.8953,"VehicleCostLow":22.5142},
  {"Scenario":"B1C1D2E2F1G1I2L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.9206,"WalkTravelPerCapita":0.389,"TruckDelay":0,"AirPollutionEm":657811.0707,"FuelUse":29099153.8315,"VehicleCost":4.2159,"VehicleCostLow":24.3862},
  {"Scenario":"B1C1D2E2F1G1I3L1P1T1V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.493,"WalkTravelPerCapita":0.3578,"TruckDelay":0,"AirPollutionEm":792457.6293,"FuelUse":34665916.6424,"VehicleCost":3.9589,"VehicleCostLow":24.4183},
  {"Scenario":"B1C1D2E2F1G1I3L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.6336,"WalkTravelPerCapita":0.3571,"TruckDelay":0,"AirPollutionEm":738814.9492,"FuelUse":32417690.7615,"VehicleCost":4.2789,"VehicleCostLow":26.5772},
  {"Scenario":"B1C1D2E2F1G1I3L2P1T2V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":18.0781,"WalkTravelPerCapita":0.3688,"TruckDelay":0,"AirPollutionEm":758516.3695,"FuelUse":33326762.1123,"VehicleCost":3.7677,"VehicleCostLow":25.0628},
  {"Scenario":"B1C1D2E2F1G1I3L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.2247,"WalkTravelPerCapita":0.368,"TruckDelay":0,"AirPollutionEm":708937.9851,"FuelUse":31247724.1486,"VehicleCost":4.0697,"VehicleCostLow":27.2127},
  {"Scenario":"B1C1D2E2F1G1I3L2P2T3V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.7701,"WalkTravelPerCapita":0.3935,"TruckDelay":0,"AirPollutionEm":701684.2545,"FuelUse":30938679.911,"VehicleCost":3.6443,"VehicleCostLow":22.7597},
  {"Scenario":"B1C1D2E2F1G1I3L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.9223,"WalkTravelPerCapita":0.3926,"TruckDelay":0,"AirPollutionEm":657602.8072,"FuelUse":29092322.8422,"VehicleCost":3.931,"VehicleCostLow":24.5084},
  {"Scenario":"B1C1D2E2F1G2I1L1P1T1V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":17.8017,"WalkTravelPerCapita":0.359,"TruckDelay":0,"AirPollutionEm":716367.7451,"FuelUse":31506085.7486,"VehicleCost":4.5463,"VehicleCostLow":23.9754},
  {"Scenario":"B1C1D2E2F1G2I1L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.142,"WalkTravelPerCapita":0.3571,"TruckDelay":0,"AirPollutionEm":677938.2951,"FuelUse":29891414.1404,"VehicleCost":4.92,"VehicleCostLow":26.036},
  {"Scenario":"B1C1D2E2F1G2I1L2P1T2V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.4047,"WalkTravelPerCapita":0.3697,"TruckDelay":0,"AirPollutionEm":680374.5599,"FuelUse":30080796.981,"VehicleCost":4.359,"VehicleCostLow":24.6578},
  {"Scenario":"B1C1D2E2F1G2I1L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.7431,"WalkTravelPerCapita":0.3677,"TruckDelay":0,"AirPollutionEm":646135.7583,"FuelUse":28642047.738,"VehicleCost":4.7136,"VehicleCostLow":26.785},
  {"Scenario":"B1C1D2E2F1G2I1L2P2T3V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.1229,"WalkTravelPerCapita":0.3954,"TruckDelay":0,"AirPollutionEm":626366.5794,"FuelUse":27811866.6655,"VehicleCost":4.2181,"VehicleCostLow":22.32},
  {"Scenario":"B1C1D2E2F1G2I1L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4328,"WalkTravelPerCapita":0.3933,"TruckDelay":0,"AirPollutionEm":595480.368,"FuelUse":26514160.2781,"VehicleCost":4.5692,"VehicleCostLow":24.0971},
  {"Scenario":"B1C1D2E2F1G2I2L1P1T1V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":17.9178,"WalkTravelPerCapita":0.3629,"TruckDelay":0,"AirPollutionEm":718976.1135,"FuelUse":31613539.7771,"VehicleCost":4.223,"VehicleCostLow":24.1234},
  {"Scenario":"B1C1D2E2F1G2I2L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.2414,"WalkTravelPerCapita":0.3611,"TruckDelay":0,"AirPollutionEm":680460.0982,"FuelUse":29995171.9955,"VehicleCost":4.5703,"VehicleCostLow":26.2799},
  {"Scenario":"B1C1D2E2F1G2I2L2P1T2V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.3745,"WalkTravelPerCapita":0.3753,"TruckDelay":0,"AirPollutionEm":677526.7463,"FuelUse":29964256.4807,"VehicleCost":4.0269,"VehicleCostLow":24.8243},
  {"Scenario":"B1C1D2E2F1G2I2L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.7022,"WalkTravelPerCapita":0.3734,"TruckDelay":0,"AirPollutionEm":643364.6958,"FuelUse":28527064.1758,"VehicleCost":4.3554,"VehicleCostLow":26.8791},
  {"Scenario":"B1C1D2E2F1G2I2L2P2T3V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.1116,"WalkTravelPerCapita":0.4009,"TruckDelay":0,"AirPollutionEm":623649.5727,"FuelUse":27699142.4134,"VehicleCost":3.8967,"VehicleCostLow":22.516},
  {"Scenario":"B1C1D2E2F1G2I2L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4201,"WalkTravelPerCapita":0.3989,"TruckDelay":0,"AirPollutionEm":593015.0157,"FuelUse":26410149.8229,"VehicleCost":4.2173,"VehicleCostLow":24.3882},
  {"Scenario":"B1C1D2E2F1G2I3L1P1T1V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":17.9262,"WalkTravelPerCapita":0.3668,"TruckDelay":0,"AirPollutionEm":717608.653,"FuelUse":31557172.331,"VehicleCost":3.9607,"VehicleCostLow":24.4212},
  {"Scenario":"B1C1D2E2F1G2I3L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.2425,"WalkTravelPerCapita":0.365,"TruckDelay":0,"AirPollutionEm":679417.9932,"FuelUse":29951853.3565,"VehicleCost":4.2807,"VehicleCostLow":26.5803},
  {"Scenario":"B1C1D2E2F1G2I3L2P1T2V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.445,"WalkTravelPerCapita":0.3785,"TruckDelay":0,"AirPollutionEm":679211.8728,"FuelUse":30033470.2352,"VehicleCost":3.7692,"VehicleCostLow":25.0654},
  {"Scenario":"B1C1D2E2F1G2I3L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.764,"WalkTravelPerCapita":0.3767,"TruckDelay":0,"AirPollutionEm":645291.0892,"FuelUse":28606252.6947,"VehicleCost":4.0712,"VehicleCostLow":27.2154},
  {"Scenario":"B1C1D2E2F1G2I3L2P2T3V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.1858,"WalkTravelPerCapita":0.4042,"TruckDelay":0,"AirPollutionEm":625560.9769,"FuelUse":27777769.467,"VehicleCost":3.6457,"VehicleCostLow":22.7617},
  {"Scenario":"B1C1D2E2F1G2I3L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4849,"WalkTravelPerCapita":0.4022,"TruckDelay":0,"AirPollutionEm":595591.5829,"FuelUse":26518870.7551,"VehicleCost":3.9324,"VehicleCostLow":24.5105},
  {"Scenario":"B1C1D2E2F1G3I1L1P1T1V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":14.6908,"WalkTravelPerCapita":0.3784,"TruckDelay":0,"AirPollutionEm":575311.3593,"FuelUse":25649302.297,"VehicleCost":4.5482,"VehicleCostLow":23.9769},
  {"Scenario":"B1C1D2E2F1G3I1L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.199,"WalkTravelPerCapita":0.3749,"TruckDelay":0,"AirPollutionEm":556737.5864,"FuelUse":24861808.5415,"VehicleCost":4.922,"VehicleCostLow":26.0377},
  {"Scenario":"B1C1D2E2F1G3I1L2P1T2V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.3486,"WalkTravelPerCapita":0.3899,"TruckDelay":0,"AirPollutionEm":539595.4997,"FuelUse":24236986.0193,"VehicleCost":4.3606,"VehicleCostLow":24.6592},
  {"Scenario":"B1C1D2E2F1G3I1L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8228,"WalkTravelPerCapita":0.3863,"TruckDelay":0,"AirPollutionEm":523434.6288,"FuelUse":23551750.4197,"VehicleCost":4.7153,"VehicleCostLow":26.7866},
  {"Scenario":"B1C1D2E2F1G3I1L2P2T3V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.256,"WalkTravelPerCapita":0.4168,"TruckDelay":0,"AirPollutionEm":495145.7499,"FuelUse":22364988.7532,"VehicleCost":4.2195,"VehicleCostLow":22.321},
  {"Scenario":"B1C1D2E2F1G3I1L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6874,"WalkTravelPerCapita":0.4132,"TruckDelay":0,"AirPollutionEm":480505.8601,"FuelUse":21744843.7912,"VehicleCost":4.5706,"VehicleCostLow":24.0981},
  {"Scenario":"B1C1D2E2F1G3I2L1P1T1V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":14.8765,"WalkTravelPerCapita":0.3819,"TruckDelay":0,"AirPollutionEm":581437.4411,"FuelUse":25902743.289,"VehicleCost":4.2249,"VehicleCostLow":24.1249},
  {"Scenario":"B1C1D2E2F1G3I2L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.3746,"WalkTravelPerCapita":0.3785,"TruckDelay":0,"AirPollutionEm":562462.7134,"FuelUse":25098705.4189,"VehicleCost":4.5723,"VehicleCostLow":26.2816},
  {"Scenario":"B1C1D2E2F1G3I2L2P1T2V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.3914,"WalkTravelPerCapita":0.3949,"TruckDelay":0,"AirPollutionEm":540120.2967,"FuelUse":24259862.6961,"VehicleCost":4.0285,"VehicleCostLow":24.8255},
  {"Scenario":"B1C1D2E2F1G3I2L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8507,"WalkTravelPerCapita":0.3916,"TruckDelay":0,"AirPollutionEm":523468.9304,"FuelUse":23552801.8421,"VehicleCost":4.3569,"VehicleCostLow":26.8805},
  {"Scenario":"B1C1D2E2F1G3I2L2P2T3V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.3117,"WalkTravelPerCapita":0.4218,"TruckDelay":0,"AirPollutionEm":495504.0182,"FuelUse":22379590.8784,"VehicleCost":3.898,"VehicleCostLow":22.5168},
  {"Scenario":"B1C1D2E2F1G3I2L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7378,"WalkTravelPerCapita":0.4183,"TruckDelay":0,"AirPollutionEm":480766.6843,"FuelUse":21753415.6221,"VehicleCost":4.2187,"VehicleCostLow":24.3891},
  {"Scenario":"B1C1D2E2F1G3I3L1P1T1V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":14.9634,"WalkTravelPerCapita":0.3853,"TruckDelay":0,"AirPollutionEm":583652.4758,"FuelUse":25995223.8342,"VehicleCost":3.9625,"VehicleCostLow":24.4226},
  {"Scenario":"B1C1D2E2F1G3I3L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.4495,"WalkTravelPerCapita":0.3819,"TruckDelay":0,"AirPollutionEm":564483.8547,"FuelUse":25182250.0961,"VehicleCost":4.2826,"VehicleCostLow":26.5819},
  {"Scenario":"B1C1D2E2F1G3I3L2P1T2V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.5352,"WalkTravelPerCapita":0.3976,"TruckDelay":0,"AirPollutionEm":545118.1482,"FuelUse":24466795.65,"VehicleCost":3.7707,"VehicleCostLow":25.0668},
  {"Scenario":"B1C1D2E2F1G3I3L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.9839,"WalkTravelPerCapita":0.3944,"TruckDelay":0,"AirPollutionEm":528457.1085,"FuelUse":23759443.5079,"VehicleCost":4.0727,"VehicleCostLow":27.217},
  {"Scenario":"B1C1D2E2F1G3I3L2P2T3V1","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.4474,"WalkTravelPerCapita":0.4245,"TruckDelay":0,"AirPollutionEm":500243.7632,"FuelUse":22575716.0291,"VehicleCost":3.647,"VehicleCostLow":22.7627},
  {"Scenario":"B1C1D2E2F1G3I3L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.8549,"WalkTravelPerCapita":0.4211,"TruckDelay":0,"AirPollutionEm":485449.2081,"FuelUse":21949369.0015,"VehicleCost":3.9337,"VehicleCostLow":24.5115},
  {"Scenario":"B1C1D2E2F2G1I1L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"1","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.6375,"WalkTravelPerCapita":0.3486,"TruckDelay":0,"AirPollutionEm":740487.6301,"FuelUse":32346583.8666,"VehicleCost":4.918,"VehicleCostLow":26.0329},
  {"Scenario":"B1C1D2E2F2G1I1L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"1","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.321,"WalkTravelPerCapita":0.3584,"TruckDelay":0,"AirPollutionEm":713010.7655,"FuelUse":31270210.5208,"VehicleCost":4.7119,"VehicleCostLow":26.7822},
  {"Scenario":"B1C1D2E2F2G1I1L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.979,"WalkTravelPerCapita":0.383,"TruckDelay":0,"AirPollutionEm":660302.6168,"FuelUse":29058487.5406,"VehicleCost":4.5677,"VehicleCostLow":24.0949},
  {"Scenario":"B1C1D2E2F2G1I2L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"1","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.6785,"WalkTravelPerCapita":0.3529,"TruckDelay":0,"AirPollutionEm":740236.4859,"FuelUse":32335206.9922,"VehicleCost":4.5685,"VehicleCostLow":26.2768},
  {"Scenario":"B1C1D2E2F2G1I2L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"1","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.2292,"WalkTravelPerCapita":0.3643,"TruckDelay":0,"AirPollutionEm":707723.5229,"FuelUse":31050889.8693,"VehicleCost":4.3538,"VehicleCostLow":26.8765},
  {"Scenario":"B1C1D2E2F2G1I2L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.9225,"WalkTravelPerCapita":0.3889,"TruckDelay":0,"AirPollutionEm":655576.5264,"FuelUse":28861049.0284,"VehicleCost":4.2159,"VehicleCostLow":24.3862},
  {"Scenario":"B1C1D2E2F2G1I3L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"1","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.6351,"WalkTravelPerCapita":0.3571,"TruckDelay":0,"AirPollutionEm":737023.109,"FuelUse":32201818.84,"VehicleCost":4.2789,"VehicleCostLow":26.5772},
  {"Scenario":"B1C1D2E2F2G1I3L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"1","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.2265,"WalkTravelPerCapita":0.368,"TruckDelay":0,"AirPollutionEm":706693.4835,"FuelUse":31007344.0089,"VehicleCost":4.0697,"VehicleCostLow":27.2127},
  {"Scenario":"B1C1D2E2F2G1I3L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.9243,"WalkTravelPerCapita":0.3925,"TruckDelay":0,"AirPollutionEm":655182.2629,"FuelUse":28846597.8114,"VehicleCost":3.931,"VehicleCostLow":24.5084},
  {"Scenario":"B1C1D2E2F2G2I1L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"2","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.1444,"WalkTravelPerCapita":0.357,"TruckDelay":0,"AirPollutionEm":676663.6898,"FuelUse":29695980.9053,"VehicleCost":4.9199,"VehicleCostLow":26.036},
  {"Scenario":"B1C1D2E2F2G2I1L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"2","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.746,"WalkTravelPerCapita":0.3676,"TruckDelay":0,"AirPollutionEm":644480.8588,"FuelUse":28424998.2579,"VehicleCost":4.7136,"VehicleCostLow":26.785},
  {"Scenario":"B1C1D2E2F2G2I1L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4361,"WalkTravelPerCapita":0.3932,"TruckDelay":0,"AirPollutionEm":593669.5207,"FuelUse":26292544.7739,"VehicleCost":4.5692,"VehicleCostLow":24.0971},
  {"Scenario":"B1C1D2E2F2G2I2L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"2","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.244,"WalkTravelPerCapita":0.361,"TruckDelay":0,"AirPollutionEm":678976.5225,"FuelUse":29791250.1201,"VehicleCost":4.5703,"VehicleCostLow":26.2799},
  {"Scenario":"B1C1D2E2F2G2I2L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"2","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.7054,"WalkTravelPerCapita":0.3733,"TruckDelay":0,"AirPollutionEm":641425.0113,"FuelUse":28298245.5214,"VehicleCost":4.3554,"VehicleCostLow":26.8791},
  {"Scenario":"B1C1D2E2F2G2I2L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4236,"WalkTravelPerCapita":0.3988,"TruckDelay":0,"AirPollutionEm":590913.7837,"FuelUse":26176552.9824,"VehicleCost":4.2173,"VehicleCostLow":24.3882},
  {"Scenario":"B1C1D2E2F2G2I3L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"2","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.2452,"WalkTravelPerCapita":0.365,"TruckDelay":0,"AirPollutionEm":677723.9621,"FuelUse":29739271.7175,"VehicleCost":4.2807,"VehicleCostLow":26.5803},
  {"Scenario":"B1C1D2E2F2G2I3L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"2","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.7672,"WalkTravelPerCapita":0.3766,"TruckDelay":0,"AirPollutionEm":643168.411,"FuelUse":28369997.2766,"VehicleCost":4.0712,"VehicleCostLow":27.2154},
  {"Scenario":"B1C1D2E2F2G2I3L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4885,"WalkTravelPerCapita":0.4021,"TruckDelay":0,"AirPollutionEm":593304.6578,"FuelUse":26277726.1765,"VehicleCost":3.9324,"VehicleCostLow":24.5105},
  {"Scenario":"B1C1D2E2F2G3I1L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"3","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.2028,"WalkTravelPerCapita":0.3748,"TruckDelay":0,"AirPollutionEm":555590.4936,"FuelUse":24669524.1097,"VehicleCost":4.922,"VehicleCostLow":26.0377},
  {"Scenario":"B1C1D2E2F2G3I1L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"3","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8274,"WalkTravelPerCapita":0.3862,"TruckDelay":0,"AirPollutionEm":521942.8904,"FuelUse":23339022.7006,"VehicleCost":4.7153,"VehicleCostLow":26.7866},
  {"Scenario":"B1C1D2E2F2G3I1L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6926,"WalkTravelPerCapita":0.413,"TruckDelay":0,"AirPollutionEm":478875.6376,"FuelUse":21528366.354,"VehicleCost":4.5706,"VehicleCostLow":24.0981},
  {"Scenario":"B1C1D2E2F2G3I2L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"3","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.3787,"WalkTravelPerCapita":0.3783,"TruckDelay":0,"AirPollutionEm":561115.0314,"FuelUse":24898380.3177,"VehicleCost":4.5723,"VehicleCostLow":26.2816},
  {"Scenario":"B1C1D2E2F2G3I2L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"3","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8558,"WalkTravelPerCapita":0.3914,"TruckDelay":0,"AirPollutionEm":521707.4911,"FuelUse":23329004.3123,"VehicleCost":4.3569,"VehicleCostLow":26.8805},
  {"Scenario":"B1C1D2E2F2G3I2L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7435,"WalkTravelPerCapita":0.4181,"TruckDelay":0,"AirPollutionEm":478861.7229,"FuelUse":21525671.4396,"VehicleCost":4.2187,"VehicleCostLow":24.3891},
  {"Scenario":"B1C1D2E2F2G3I3L1P1T1V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"3","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.4539,"WalkTravelPerCapita":0.3818,"TruckDelay":0,"AirPollutionEm":562934.1171,"FuelUse":24973703.6253,"VehicleCost":4.2826,"VehicleCostLow":26.5819},
  {"Scenario":"B1C1D2E2F2G3I3L2P1T2V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"3","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.989,"WalkTravelPerCapita":0.3942,"TruckDelay":0,"AirPollutionEm":526514.4708,"FuelUse":23528384.8548,"VehicleCost":4.0727,"VehicleCostLow":27.217},
  {"Scenario":"B1C1D2E2F2G3I3L2P2T3V2","B":"1","C":"1","D":"2","E":"2","F":"2","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.8606,"WalkTravelPerCapita":0.4209,"TruckDelay":0,"AirPollutionEm":483360.5632,"FuelUse":21714229.7785,"VehicleCost":3.9337,"VehicleCostLow":24.5115},
  {"Scenario":"B1C2D1E1F1G1I1L1P1T1V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.6095,"WalkTravelPerCapita":0.3489,"TruckDelay":0,"AirPollutionEm":802296.8171,"FuelUse":35075089.3149,"VehicleCost":4.6179,"VehicleCostLow":24.4783},
  {"Scenario":"B1C2D1E1F1G1I1L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.7704,"WalkTravelPerCapita":0.3481,"TruckDelay":0,"AirPollutionEm":747188.4116,"FuelUse":32766259.9707,"VehicleCost":4.9917,"VehicleCostLow":26.5409},
  {"Scenario":"B1C2D1E1F1G1I1L2P1T2V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":18.272,"WalkTravelPerCapita":0.3588,"TruckDelay":0,"AirPollutionEm":770486.8427,"FuelUse":33823184.5905,"VehicleCost":4.4273,"VehicleCostLow":25.1828},
  {"Scenario":"B1C2D1E1F1G1I1L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.4381,"WalkTravelPerCapita":0.3579,"TruckDelay":0,"AirPollutionEm":719534.8736,"FuelUse":31687598.3317,"VehicleCost":4.782,"VehicleCostLow":27.3092},
  {"Scenario":"B1C2D1E1F1G1I1L2P2T3V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.918,"WalkTravelPerCapita":0.3836,"TruckDelay":0,"AirPollutionEm":712148.3092,"FuelUse":31373370.0108,"VehicleCost":4.2841,"VehicleCostLow":22.7907},
  {"Scenario":"B1C2D1E1F1G1I1L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":17.0811,"WalkTravelPerCapita":0.3826,"TruckDelay":0,"AirPollutionEm":666475.9156,"FuelUse":29459402.281,"VehicleCost":4.6353,"VehicleCostLow":24.5734},
  {"Scenario":"B1C2D1E1F1G1I2L1P1T1V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.6605,"WalkTravelPerCapita":0.3532,"TruckDelay":0,"AirPollutionEm":801626.4709,"FuelUse":35046222.5124,"VehicleCost":4.2891,"VehicleCostLow":24.6357},
  {"Scenario":"B1C2D1E1F1G1I2L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.8119,"WalkTravelPerCapita":0.3524,"TruckDelay":0,"AirPollutionEm":747197.3397,"FuelUse":32765456.9289,"VehicleCost":4.6365,"VehicleCostLow":26.7924},
  {"Scenario":"B1C2D1E1F1G1I2L2P1T2V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":18.1681,"WalkTravelPerCapita":0.3648,"TruckDelay":0,"AirPollutionEm":763998.1001,"FuelUse":33554238.7119,"VehicleCost":4.0896,"VehicleCostLow":25.3518},
  {"Scenario":"B1C2D1E1F1G1I2L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.3291,"WalkTravelPerCapita":0.364,"TruckDelay":0,"AirPollutionEm":714019.6961,"FuelUse":31459732.6796,"VehicleCost":4.418,"VehicleCostLow":27.4061},
  {"Scenario":"B1C2D1E1F1G1I2L2P2T3V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.8439,"WalkTravelPerCapita":0.3896,"TruckDelay":0,"AirPollutionEm":706652.1413,"FuelUse":31145903.3284,"VehicleCost":3.9573,"VehicleCostLow":22.9894},
  {"Scenario":"B1C2D1E1F1G1I2L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":17.0064,"WalkTravelPerCapita":0.3886,"TruckDelay":0,"AirPollutionEm":661491.4348,"FuelUse":29251605.0966,"VehicleCost":4.2779,"VehicleCostLow":24.8645},
  {"Scenario":"B1C2D1E1F1G1I3L1P1T1V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.625,"WalkTravelPerCapita":0.3573,"TruckDelay":0,"AirPollutionEm":798124.6433,"FuelUse":34900912.6276,"VehicleCost":4.0224,"VehicleCostLow":24.9409},
  {"Scenario":"B1C2D1E1F1G1I3L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.7688,"WalkTravelPerCapita":0.3565,"TruckDelay":0,"AirPollutionEm":744145.0728,"FuelUse":32639022.412,"VehicleCost":4.3422,"VehicleCostLow":27.0923},
  {"Scenario":"B1C2D1E1F1G1I3L2P1T2V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":18.194,"WalkTravelPerCapita":0.3683,"TruckDelay":0,"AirPollutionEm":763625.8205,"FuelUse":33538894.4943,"VehicleCost":3.8275,"VehicleCostLow":25.5987},
  {"Scenario":"B1C2D1E1F1G1I3L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.3423,"WalkTravelPerCapita":0.3675,"TruckDelay":0,"AirPollutionEm":713672.3785,"FuelUse":31443975.0505,"VehicleCost":4.1295,"VehicleCostLow":27.7453},
  {"Scenario":"B1C2D1E1F1G1I3L2P2T3V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.8725,"WalkTravelPerCapita":0.393,"TruckDelay":0,"AirPollutionEm":706183.7388,"FuelUse":31125054.7137,"VehicleCost":3.7019,"VehicleCostLow":23.2341},
  {"Scenario":"B1C2D1E1F1G1I3L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":17.0283,"WalkTravelPerCapita":0.3921,"TruckDelay":0,"AirPollutionEm":661886.3013,"FuelUse":29269337.3131,"VehicleCost":3.9887,"VehicleCostLow":24.9893},
  {"Scenario":"B1C2D1E1F1G2I1L1P1T1V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":17.8997,"WalkTravelPerCapita":0.3585,"TruckDelay":0,"AirPollutionEm":720378.8239,"FuelUse":31672293.2646,"VehicleCost":4.6199,"VehicleCostLow":24.4812},
  {"Scenario":"B1C2D1E1F1G2I1L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.2446,"WalkTravelPerCapita":0.3566,"TruckDelay":0,"AirPollutionEm":681977.8216,"FuelUse":30059384.4533,"VehicleCost":4.9936,"VehicleCostLow":26.544},
  {"Scenario":"B1C2D1E1F1G2I1L2P1T2V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.4866,"WalkTravelPerCapita":0.3693,"TruckDelay":0,"AirPollutionEm":683946.4264,"FuelUse":30229553.1851,"VehicleCost":4.429,"VehicleCostLow":25.1855},
  {"Scenario":"B1C2D1E1F1G2I1L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.8313,"WalkTravelPerCapita":0.3673,"TruckDelay":0,"AirPollutionEm":649592.5297,"FuelUse":28785132.8848,"VehicleCost":4.7837,"VehicleCostLow":27.312},
  {"Scenario":"B1C2D1E1F1G2I1L2P2T3V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.1971,"WalkTravelPerCapita":0.395,"TruckDelay":0,"AirPollutionEm":629517.226,"FuelUse":27942358.1221,"VehicleCost":4.2856,"VehicleCostLow":22.7927},
  {"Scenario":"B1C2D1E1F1G2I1L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.5073,"WalkTravelPerCapita":0.393,"TruckDelay":0,"AirPollutionEm":598409.9639,"FuelUse":26635140.8043,"VehicleCost":4.6367,"VehicleCostLow":24.5755},
  {"Scenario":"B1C2D1E1F1G2I2L1P1T1V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":18.0175,"WalkTravelPerCapita":0.3625,"TruckDelay":0,"AirPollutionEm":723091.4362,"FuelUse":31784260.4743,"VehicleCost":4.291,"VehicleCostLow":24.6386},
  {"Scenario":"B1C2D1E1F1G2I2L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.3442,"WalkTravelPerCapita":0.3606,"TruckDelay":0,"AirPollutionEm":684447.7858,"FuelUse":30160434.7502,"VehicleCost":4.6384,"VehicleCostLow":26.7955},
  {"Scenario":"B1C2D1E1F1G2I2L2P1T2V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.4452,"WalkTravelPerCapita":0.375,"TruckDelay":0,"AirPollutionEm":680447.1047,"FuelUse":30084810.114,"VehicleCost":4.0912,"VehicleCostLow":25.3543},
  {"Scenario":"B1C2D1E1F1G2I2L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.7773,"WalkTravelPerCapita":0.373,"TruckDelay":0,"AirPollutionEm":646460.4987,"FuelUse":28655797.0211,"VehicleCost":4.4196,"VehicleCostLow":27.4088},
  {"Scenario":"B1C2D1E1F1G2I2L2P2T3V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.1682,"WalkTravelPerCapita":0.4007,"TruckDelay":0,"AirPollutionEm":626147.3027,"FuelUse":27803209.3023,"VehicleCost":3.9587,"VehicleCostLow":22.9912},
  {"Scenario":"B1C2D1E1F1G2I2L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4831,"WalkTravelPerCapita":0.3986,"TruckDelay":0,"AirPollutionEm":595747.4601,"FuelUse":26523400.9407,"VehicleCost":4.2793,"VehicleCostLow":24.8664},
  {"Scenario":"B1C2D1E1F1G2I3L1P1T1V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":18.0275,"WalkTravelPerCapita":0.3663,"TruckDelay":0,"AirPollutionEm":721826.6664,"FuelUse":31732117.1541,"VehicleCost":4.0242,"VehicleCostLow":24.9438},
  {"Scenario":"B1C2D1E1F1G2I3L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.3481,"WalkTravelPerCapita":0.3645,"TruckDelay":0,"AirPollutionEm":683458.217,"FuelUse":30119396.6537,"VehicleCost":4.344,"VehicleCostLow":27.0953},
  {"Scenario":"B1C2D1E1F1G2I3L2P1T2V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.5302,"WalkTravelPerCapita":0.3781,"TruckDelay":0,"AirPollutionEm":682851.7673,"FuelUse":30184543.5199,"VehicleCost":3.8291,"VehicleCostLow":25.6013},
  {"Scenario":"B1C2D1E1F1G2I3L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.8492,"WalkTravelPerCapita":0.3762,"TruckDelay":0,"AirPollutionEm":648503.5734,"FuelUse":28739098.3955,"VehicleCost":4.131,"VehicleCostLow":27.748},
  {"Scenario":"B1C2D1E1F1G2I3L2P2T3V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.2597,"WalkTravelPerCapita":0.4038,"TruckDelay":0,"AirPollutionEm":628663.3823,"FuelUse":27906149.5119,"VehicleCost":3.7033,"VehicleCostLow":23.2361},
  {"Scenario":"B1C2D1E1F1G2I3L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.5646,"WalkTravelPerCapita":0.4018,"TruckDelay":0,"AirPollutionEm":598720.1068,"FuelUse":26647880.8914,"VehicleCost":3.99,"VehicleCostLow":24.9913},
  {"Scenario":"B1C2D1E1F1G3I1L1P1T1V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":14.7474,"WalkTravelPerCapita":0.3781,"TruckDelay":0,"AirPollutionEm":577495.4685,"FuelUse":25739562.9503,"VehicleCost":4.6218,"VehicleCostLow":24.4826},
  {"Scenario":"B1C2D1E1F1G3I1L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.2592,"WalkTravelPerCapita":0.3746,"TruckDelay":0,"AirPollutionEm":559039.2002,"FuelUse":24957808.9249,"VehicleCost":4.9956,"VehicleCostLow":26.5456},
  {"Scenario":"B1C2D1E1F1G3I1L2P1T2V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.3936,"WalkTravelPerCapita":0.3896,"TruckDelay":0,"AirPollutionEm":541469.3051,"FuelUse":24315116.3435,"VehicleCost":4.4306,"VehicleCostLow":25.1868},
  {"Scenario":"B1C2D1E1F1G3I1L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8736,"WalkTravelPerCapita":0.386,"TruckDelay":0,"AirPollutionEm":525370.6857,"FuelUse":23632133.7368,"VehicleCost":4.7853,"VehicleCostLow":27.3135},
  {"Scenario":"B1C2D1E1F1G3I1L2P2T3V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.2975,"WalkTravelPerCapita":0.4165,"TruckDelay":0,"AirPollutionEm":496820.077,"FuelUse":22434267.6263,"VehicleCost":4.287,"VehicleCostLow":22.7936},
  {"Scenario":"B1C2D1E1F1G3I1L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7302,"WalkTravelPerCapita":0.4129,"TruckDelay":0,"AirPollutionEm":482054.6518,"FuelUse":21808478.8319,"VehicleCost":4.6382,"VehicleCostLow":24.5765},
  {"Scenario":"B1C2D1E1F1G3I2L1P1T1V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":14.935,"WalkTravelPerCapita":0.3816,"TruckDelay":0,"AirPollutionEm":583717.0718,"FuelUse":25997156.9352,"VehicleCost":4.2929,"VehicleCostLow":24.64},
  {"Scenario":"B1C2D1E1F1G3I2L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.4372,"WalkTravelPerCapita":0.3781,"TruckDelay":0,"AirPollutionEm":564780.709,"FuelUse":25194604.8974,"VehicleCost":4.6403,"VehicleCostLow":26.7971},
  {"Scenario":"B1C2D1E1F1G3I2L2P1T2V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.4269,"WalkTravelPerCapita":0.3948,"TruckDelay":0,"AirPollutionEm":541480.8586,"FuelUse":24316022.3526,"VehicleCost":4.0927,"VehicleCostLow":25.3555},
  {"Scenario":"B1C2D1E1F1G3I2L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8908,"WalkTravelPerCapita":0.3914,"TruckDelay":0,"AirPollutionEm":525112.1688,"FuelUse":23621284.8534,"VehicleCost":4.4212,"VehicleCostLow":27.4102},
  {"Scenario":"B1C2D1E1F1G3I2L2P2T3V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.3411,"WalkTravelPerCapita":0.4216,"TruckDelay":0,"AirPollutionEm":496768.4823,"FuelUse":22432501.0188,"VehicleCost":3.96,"VehicleCostLow":22.992},
  {"Scenario":"B1C2D1E1F1G3I2L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7679,"WalkTravelPerCapita":0.4181,"TruckDelay":0,"AirPollutionEm":482125.653,"FuelUse":21809872.6567,"VehicleCost":4.2807,"VehicleCostLow":24.8673},
  {"Scenario":"B1C2D1E1F1G3I3L1P1T1V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":15.0224,"WalkTravelPerCapita":0.3849,"TruckDelay":0,"AirPollutionEm":585973.6805,"FuelUse":26091505.9338,"VehicleCost":4.026,"VehicleCostLow":24.9452},
  {"Scenario":"B1C2D1E1F1G3I3L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.5134,"WalkTravelPerCapita":0.3816,"TruckDelay":0,"AirPollutionEm":566816.8001,"FuelUse":25278728.6842,"VehicleCost":4.3459,"VehicleCostLow":27.0968},
  {"Scenario":"B1C2D1E1F1G3I3L2P1T2V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.5836,"WalkTravelPerCapita":0.3973,"TruckDelay":0,"AirPollutionEm":547073.6583,"FuelUse":24547952.8555,"VehicleCost":3.8305,"VehicleCostLow":25.6026},
  {"Scenario":"B1C2D1E1F1G3I3L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":14.036,"WalkTravelPerCapita":0.3941,"TruckDelay":0,"AirPollutionEm":530179.6325,"FuelUse":23830313.3571,"VehicleCost":4.1326,"VehicleCostLow":27.7495},
  {"Scenario":"B1C2D1E1F1G3I3L2P2T3V1","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.4911,"WalkTravelPerCapita":0.4242,"TruckDelay":0,"AirPollutionEm":501936.431,"FuelUse":22645762.5867,"VehicleCost":3.7045,"VehicleCostLow":23.237},
  {"Scenario":"B1C2D1E1F1G3I3L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.9021,"WalkTravelPerCapita":0.4208,"TruckDelay":0,"AirPollutionEm":487204.4082,"FuelUse":22021390.3896,"VehicleCost":3.9914,"VehicleCostLow":24.9923},
  {"Scenario":"B1C2D1E1F2G1I1L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"1","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.7718,"WalkTravelPerCapita":0.348,"TruckDelay":0,"AirPollutionEm":745820.8209,"FuelUse":32567911.3397,"VehicleCost":4.9917,"VehicleCostLow":26.5409},
  {"Scenario":"B1C2D1E1F2G1I1L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"1","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.4398,"WalkTravelPerCapita":0.3579,"TruckDelay":0,"AirPollutionEm":717761.9025,"FuelUse":31466773.8368,"VehicleCost":4.782,"VehicleCostLow":27.3092},
  {"Scenario":"B1C2D1E1F2G1I1L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":17.083,"WalkTravelPerCapita":0.3826,"TruckDelay":0,"AirPollutionEm":664534.2894,"FuelUse":29233517.1449,"VehicleCost":4.6353,"VehicleCostLow":24.5734},
  {"Scenario":"B1C2D1E1F2G1I2L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"1","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.8133,"WalkTravelPerCapita":0.3523,"TruckDelay":0,"AirPollutionEm":745615.3891,"FuelUse":32558347.977,"VehicleCost":4.6365,"VehicleCostLow":26.7924},
  {"Scenario":"B1C2D1E1F2G1I2L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"1","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.3309,"WalkTravelPerCapita":0.3639,"TruckDelay":0,"AirPollutionEm":711952.623,"FuelUse":31226699.3068,"VehicleCost":4.418,"VehicleCostLow":27.4061},
  {"Scenario":"B1C2D1E1F2G1I2L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":17.0084,"WalkTravelPerCapita":0.3885,"TruckDelay":0,"AirPollutionEm":659251.0995,"FuelUse":29013336.9976,"VehicleCost":4.2779,"VehicleCostLow":24.8645},
  {"Scenario":"B1C2D1E1F2G1I3L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"1","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.7703,"WalkTravelPerCapita":0.3565,"TruckDelay":0,"AirPollutionEm":742347.5565,"FuelUse":32423008.5516,"VehicleCost":4.3422,"VehicleCostLow":27.0923},
  {"Scenario":"B1C2D1E1F2G1I3L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"1","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.3441,"WalkTravelPerCapita":0.3674,"TruckDelay":0,"AirPollutionEm":711420.41,"FuelUse":31203376.5742,"VehicleCost":4.1295,"VehicleCostLow":27.7453},
  {"Scenario":"B1C2D1E1F2G1I3L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":17.0303,"WalkTravelPerCapita":0.392,"TruckDelay":0,"AirPollutionEm":659458.2718,"FuelUse":29023390.2335,"VehicleCost":3.9887,"VehicleCostLow":24.9893},
  {"Scenario":"B1C2D1E1F2G2I1L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"2","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.247,"WalkTravelPerCapita":0.3565,"TruckDelay":0,"AirPollutionEm":680700.4133,"FuelUse":29863919.193,"VehicleCost":4.9936,"VehicleCostLow":26.544},
  {"Scenario":"B1C2D1E1F2G2I1L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"2","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.8343,"WalkTravelPerCapita":0.3672,"TruckDelay":0,"AirPollutionEm":647933.8433,"FuelUse":28568010.5982,"VehicleCost":4.7837,"VehicleCostLow":27.312},
  {"Scenario":"B1C2D1E1F2G2I1L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.5106,"WalkTravelPerCapita":0.3929,"TruckDelay":0,"AirPollutionEm":596595.1177,"FuelUse":26413437.8316,"VehicleCost":4.6367,"VehicleCostLow":24.5755},
  {"Scenario":"B1C2D1E1F2G2I2L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"2","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.3467,"WalkTravelPerCapita":0.3606,"TruckDelay":0,"AirPollutionEm":682960.174,"FuelUse":29956427.9695,"VehicleCost":4.6384,"VehicleCostLow":26.7955},
  {"Scenario":"B1C2D1E1F2G2I2L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"2","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.7805,"WalkTravelPerCapita":0.3729,"TruckDelay":0,"AirPollutionEm":644516.1065,"FuelUse":28426857.3121,"VehicleCost":4.4196,"VehicleCostLow":27.4088},
  {"Scenario":"B1C2D1E1F2G2I2L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4866,"WalkTravelPerCapita":0.3985,"TruckDelay":0,"AirPollutionEm":593641.4294,"FuelUse":26289674.371,"VehicleCost":4.2793,"VehicleCostLow":24.8664},
  {"Scenario":"B1C2D1E1F2G2I3L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"2","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.3509,"WalkTravelPerCapita":0.3645,"TruckDelay":0,"AirPollutionEm":681759.5711,"FuelUse":29906706.8379,"VehicleCost":4.344,"VehicleCostLow":27.0953},
  {"Scenario":"B1C2D1E1F2G2I3L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"2","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.8525,"WalkTravelPerCapita":0.3762,"TruckDelay":0,"AirPollutionEm":646374.237,"FuelUse":28502647.2902,"VehicleCost":4.131,"VehicleCostLow":27.748},
  {"Scenario":"B1C2D1E1F2G2I3L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.5682,"WalkTravelPerCapita":0.4017,"TruckDelay":0,"AirPollutionEm":596427.1659,"FuelUse":26406566.8125,"VehicleCost":3.99,"VehicleCostLow":24.9913},
  {"Scenario":"B1C2D1E1F2G3I1L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"3","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.263,"WalkTravelPerCapita":0.3745,"TruckDelay":0,"AirPollutionEm":557889.9875,"FuelUse":24765502.5041,"VehicleCost":4.9956,"VehicleCostLow":26.5456},
  {"Scenario":"B1C2D1E1F2G3I1L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"3","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8782,"WalkTravelPerCapita":0.3859,"TruckDelay":0,"AirPollutionEm":523875.7837,"FuelUse":23419337.8765,"VehicleCost":4.7853,"VehicleCostLow":27.3135},
  {"Scenario":"B1C2D1E1F2G3I1L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7354,"WalkTravelPerCapita":0.4127,"TruckDelay":0,"AirPollutionEm":480421.2537,"FuelUse":21591924.3279,"VehicleCost":4.6382,"VehicleCostLow":24.5765},
  {"Scenario":"B1C2D1E1F2G3I2L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"3","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.4413,"WalkTravelPerCapita":0.378,"TruckDelay":0,"AirPollutionEm":563429.9767,"FuelUse":24994221.1648,"VehicleCost":4.6403,"VehicleCostLow":26.7971},
  {"Scenario":"B1C2D1E1F2G3I2L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"3","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8959,"WalkTravelPerCapita":0.3912,"TruckDelay":0,"AirPollutionEm":523346.8922,"FuelUse":23397381.5003,"VehicleCost":4.4212,"VehicleCostLow":27.4102},
  {"Scenario":"B1C2D1E1F2G3I2L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7735,"WalkTravelPerCapita":0.4179,"TruckDelay":0,"AirPollutionEm":480216.9088,"FuelUse":21582016.1045,"VehicleCost":4.2807,"VehicleCostLow":24.8673},
  {"Scenario":"B1C2D1E1F2G3I3L1P1T1V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"3","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.5178,"WalkTravelPerCapita":0.3815,"TruckDelay":0,"AirPollutionEm":565262.8125,"FuelUse":25070074.2489,"VehicleCost":4.3459,"VehicleCostLow":27.0968},
  {"Scenario":"B1C2D1E1F2G3I3L2P1T2V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"3","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":14.0412,"WalkTravelPerCapita":0.3939,"TruckDelay":0,"AirPollutionEm":528231.5964,"FuelUse":23599095.1563,"VehicleCost":4.1326,"VehicleCostLow":27.7495},
  {"Scenario":"B1C2D1E1F2G3I3L2P2T3V2","B":"1","C":"2","D":"1","E":"1","F":"2","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.9079,"WalkTravelPerCapita":0.4206,"TruckDelay":0,"AirPollutionEm":485110.6733,"FuelUse":21786099.6574,"VehicleCost":3.9914,"VehicleCostLow":24.9923},
  {"Scenario":"B1C2D2E2F1G1I1L1P1T1V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.4802,"WalkTravelPerCapita":0.3495,"TruckDelay":0,"AirPollutionEm":796775.9322,"FuelUse":34845982.3502,"VehicleCost":4.6179,"VehicleCostLow":24.4781},
  {"Scenario":"B1C2D2E2F1G1I1L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.6371,"WalkTravelPerCapita":0.3486,"TruckDelay":0,"AirPollutionEm":741879.9221,"FuelUse":32545796.0056,"VehicleCost":4.9916,"VehicleCostLow":26.5408},
  {"Scenario":"B1C2D2E2F1G1I1L2P1T2V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":18.1572,"WalkTravelPerCapita":0.3593,"TruckDelay":0,"AirPollutionEm":765377.1861,"FuelUse":33610777.2818,"VehicleCost":4.4273,"VehicleCostLow":25.1827},
  {"Scenario":"B1C2D2E2F1G1I1L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.3193,"WalkTravelPerCapita":0.3584,"TruckDelay":0,"AirPollutionEm":714779.4066,"FuelUse":31490950.1773,"VehicleCost":4.7819,"VehicleCostLow":27.309},
  {"Scenario":"B1C2D2E2F1G1I1L2P2T3V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.8161,"WalkTravelPerCapita":0.3841,"TruckDelay":0,"AirPollutionEm":707710.0952,"FuelUse":31189496.0597,"VehicleCost":4.2841,"VehicleCostLow":22.7906},
  {"Scenario":"B1C2D2E2F1G1I1L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.9762,"WalkTravelPerCapita":0.3831,"TruckDelay":0,"AirPollutionEm":662172.6518,"FuelUse":29281419.352,"VehicleCost":4.6352,"VehicleCostLow":24.5733},
  {"Scenario":"B1C2D2E2F1G1I2L1P1T1V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.528,"WalkTravelPerCapita":0.3537,"TruckDelay":0,"AirPollutionEm":795944.0704,"FuelUse":34810451.4211,"VehicleCost":4.2891,"VehicleCostLow":24.6356},
  {"Scenario":"B1C2D2E2F1G1I2L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.6769,"WalkTravelPerCapita":0.3529,"TruckDelay":0,"AirPollutionEm":741814.4686,"FuelUse":32542236.9333,"VehicleCost":4.6365,"VehicleCostLow":26.7922},
  {"Scenario":"B1C2D2E2F1G1I2L2P1T2V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":18.0697,"WalkTravelPerCapita":0.3652,"TruckDelay":0,"AirPollutionEm":759816.4712,"FuelUse":33381774.3209,"VehicleCost":4.0895,"VehicleCostLow":25.3518},
  {"Scenario":"B1C2D2E2F1G1I2L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.2274,"WalkTravelPerCapita":0.3644,"TruckDelay":0,"AirPollutionEm":709785.1909,"FuelUse":31283783.3968,"VehicleCost":4.418,"VehicleCostLow":27.4061},
  {"Scenario":"B1C2D2E2F1G1I2L2P2T3V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.7622,"WalkTravelPerCapita":0.3899,"TruckDelay":0,"AirPollutionEm":702989.6982,"FuelUse":30993639.4601,"VehicleCost":3.9572,"VehicleCostLow":22.9894},
  {"Scenario":"B1C2D2E2F1G1I2L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.9203,"WalkTravelPerCapita":0.389,"TruckDelay":0,"AirPollutionEm":657938.306,"FuelUse":29104372.2732,"VehicleCost":4.2779,"VehicleCostLow":24.8644},
  {"Scenario":"B1C2D2E2F1G1I3L1P1T1V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.493,"WalkTravelPerCapita":0.3578,"TruckDelay":0,"AirPollutionEm":792457.718,"FuelUse":34665920.321,"VehicleCost":4.0223,"VehicleCostLow":24.9408},
  {"Scenario":"B1C2D2E2F1G1I3L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.6334,"WalkTravelPerCapita":0.3571,"TruckDelay":0,"AirPollutionEm":738806.5523,"FuelUse":32417677.0939,"VehicleCost":4.3422,"VehicleCostLow":27.0921},
  {"Scenario":"B1C2D2E2F1G1I3L2P1T2V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":18.0781,"WalkTravelPerCapita":0.3688,"TruckDelay":0,"AirPollutionEm":758516.4646,"FuelUse":33326766.0534,"VehicleCost":3.8275,"VehicleCostLow":25.5985},
  {"Scenario":"B1C2D2E2F1G1I3L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.2234,"WalkTravelPerCapita":0.368,"TruckDelay":0,"AirPollutionEm":708854.7064,"FuelUse":31244110.3575,"VehicleCost":4.1295,"VehicleCostLow":27.7452},
  {"Scenario":"B1C2D2E2F1G1I3L2P2T3V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.7688,"WalkTravelPerCapita":0.3935,"TruckDelay":0,"AirPollutionEm":701659.156,"FuelUse":30937472.6894,"VehicleCost":3.7019,"VehicleCostLow":23.234},
  {"Scenario":"B1C2D2E2F1G1I3L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.9224,"WalkTravelPerCapita":0.3926,"TruckDelay":0,"AirPollutionEm":657602.9308,"FuelUse":29092327.9693,"VehicleCost":3.9886,"VehicleCostLow":24.9891},
  {"Scenario":"B1C2D2E2F1G2I1L1P1T1V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":17.8032,"WalkTravelPerCapita":0.359,"TruckDelay":0,"AirPollutionEm":716408.7297,"FuelUse":31507728.3642,"VehicleCost":4.6198,"VehicleCostLow":24.4811},
  {"Scenario":"B1C2D2E2F1G2I1L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.143,"WalkTravelPerCapita":0.3571,"TruckDelay":0,"AirPollutionEm":678008.9648,"FuelUse":29894300.7477,"VehicleCost":4.9936,"VehicleCostLow":26.5439},
  {"Scenario":"B1C2D2E2F1G2I1L2P1T2V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.4043,"WalkTravelPerCapita":0.3697,"TruckDelay":0,"AirPollutionEm":680359.4787,"FuelUse":30080165.3648,"VehicleCost":4.429,"VehicleCostLow":25.1854},
  {"Scenario":"B1C2D2E2F1G2I1L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.7431,"WalkTravelPerCapita":0.3677,"TruckDelay":0,"AirPollutionEm":646135.9127,"FuelUse":28642054.1389,"VehicleCost":4.7836,"VehicleCostLow":27.3118},
  {"Scenario":"B1C2D2E2F1G2I1L2P2T3V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.1229,"WalkTravelPerCapita":0.3954,"TruckDelay":0,"AirPollutionEm":626366.7068,"FuelUse":27811871.9454,"VehicleCost":4.2856,"VehicleCostLow":22.7926},
  {"Scenario":"B1C2D2E2F1G2I1L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4304,"WalkTravelPerCapita":0.3933,"TruckDelay":0,"AirPollutionEm":595304.1683,"FuelUse":26506673.6795,"VehicleCost":4.6367,"VehicleCostLow":24.5754},
  {"Scenario":"B1C2D2E2F1G2I2L1P1T1V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":17.9183,"WalkTravelPerCapita":0.3629,"TruckDelay":0,"AirPollutionEm":718988.7764,"FuelUse":31614143.7608,"VehicleCost":4.291,"VehicleCostLow":24.6385},
  {"Scenario":"B1C2D2E2F1G2I2L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.241,"WalkTravelPerCapita":0.3611,"TruckDelay":0,"AirPollutionEm":680439.7571,"FuelUse":29994360.7831,"VehicleCost":4.6383,"VehicleCostLow":26.7953},
  {"Scenario":"B1C2D2E2F1G2I2L2P1T2V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.376,"WalkTravelPerCapita":0.3753,"TruckDelay":0,"AirPollutionEm":677664.1514,"FuelUse":29970465.4961,"VehicleCost":4.0911,"VehicleCostLow":25.3543},
  {"Scenario":"B1C2D2E2F1G2I2L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.7022,"WalkTravelPerCapita":0.3734,"TruckDelay":0,"AirPollutionEm":643364.773,"FuelUse":28527067.3737,"VehicleCost":4.4196,"VehicleCostLow":27.4087},
  {"Scenario":"B1C2D2E2F1G2I2L2P2T3V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.1116,"WalkTravelPerCapita":0.4009,"TruckDelay":0,"AirPollutionEm":623649.6469,"FuelUse":27699145.4873,"VehicleCost":3.9586,"VehicleCostLow":22.9912},
  {"Scenario":"B1C2D2E2F1G2I2L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4218,"WalkTravelPerCapita":0.3989,"TruckDelay":0,"AirPollutionEm":593231.712,"FuelUse":26419111.5656,"VehicleCost":4.2793,"VehicleCostLow":24.8664},
  {"Scenario":"B1C2D2E2F1G2I3L1P1T1V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":17.9262,"WalkTravelPerCapita":0.3668,"TruckDelay":0,"AirPollutionEm":717608.7365,"FuelUse":31557175.7915,"VehicleCost":4.0241,"VehicleCostLow":24.9437},
  {"Scenario":"B1C2D2E2F1G2I3L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.242,"WalkTravelPerCapita":0.365,"TruckDelay":0,"AirPollutionEm":679395.0805,"FuelUse":29951209.343,"VehicleCost":4.3439,"VehicleCostLow":27.0952},
  {"Scenario":"B1C2D2E2F1G2I3L2P1T2V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.445,"WalkTravelPerCapita":0.3785,"TruckDelay":0,"AirPollutionEm":679211.961,"FuelUse":30033473.8897,"VehicleCost":3.829,"VehicleCostLow":25.6011},
  {"Scenario":"B1C2D2E2F1G2I3L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.7591,"WalkTravelPerCapita":0.3767,"TruckDelay":0,"AirPollutionEm":644922.1206,"FuelUse":28590444.0736,"VehicleCost":4.131,"VehicleCostLow":27.7479},
  {"Scenario":"B1C2D2E2F1G2I3L2P2T3V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.1827,"WalkTravelPerCapita":0.4042,"TruckDelay":0,"AirPollutionEm":625409.6619,"FuelUse":27771320.9813,"VehicleCost":3.7032,"VehicleCostLow":23.236},
  {"Scenario":"B1C2D2E2F1G2I3L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4849,"WalkTravelPerCapita":0.4022,"TruckDelay":0,"AirPollutionEm":595591.6976,"FuelUse":26518875.5123,"VehicleCost":3.99,"VehicleCostLow":24.9912},
  {"Scenario":"B1C2D2E2F1G3I1L1P1T1V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":14.6917,"WalkTravelPerCapita":0.3784,"TruckDelay":0,"AirPollutionEm":575352.7002,"FuelUse":25651057.4969,"VehicleCost":4.6218,"VehicleCostLow":24.4826},
  {"Scenario":"B1C2D2E2F1G3I1L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.199,"WalkTravelPerCapita":0.3749,"TruckDelay":0,"AirPollutionEm":556775.4611,"FuelUse":24863457.397,"VehicleCost":4.9956,"VehicleCostLow":26.5455},
  {"Scenario":"B1C2D2E2F1G3I1L2P1T2V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.3482,"WalkTravelPerCapita":0.3899,"TruckDelay":0,"AirPollutionEm":539577.4987,"FuelUse":24236202.3591,"VehicleCost":4.4306,"VehicleCostLow":25.1867},
  {"Scenario":"B1C2D2E2F1G3I1L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8228,"WalkTravelPerCapita":0.3863,"TruckDelay":0,"AirPollutionEm":523434.7741,"FuelUse":23551756.4447,"VehicleCost":4.7853,"VehicleCostLow":27.3134},
  {"Scenario":"B1C2D2E2F1G3I1L2P2T3V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.256,"WalkTravelPerCapita":0.4168,"TruckDelay":0,"AirPollutionEm":495145.8691,"FuelUse":22364993.6927,"VehicleCost":4.287,"VehicleCostLow":22.7936},
  {"Scenario":"B1C2D2E2F1G3I1L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6881,"WalkTravelPerCapita":0.4132,"TruckDelay":0,"AirPollutionEm":480433.3493,"FuelUse":21741633.0798,"VehicleCost":4.6381,"VehicleCostLow":24.5765},
  {"Scenario":"B1C2D2E2F1G3I2L1P1T1V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":14.8776,"WalkTravelPerCapita":0.3819,"TruckDelay":0,"AirPollutionEm":581494.0466,"FuelUse":25905151.7884,"VehicleCost":4.2928,"VehicleCostLow":24.64},
  {"Scenario":"B1C2D2E2F1G3I2L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.375,"WalkTravelPerCapita":0.3785,"TruckDelay":0,"AirPollutionEm":562477.5183,"FuelUse":25099340.0449,"VehicleCost":4.6403,"VehicleCostLow":26.797},
  {"Scenario":"B1C2D2E2F1G3I2L2P1T2V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.3894,"WalkTravelPerCapita":0.3949,"TruckDelay":0,"AirPollutionEm":540126.7803,"FuelUse":24260726.1401,"VehicleCost":4.0926,"VehicleCostLow":25.3555},
  {"Scenario":"B1C2D2E2F1G3I2L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8507,"WalkTravelPerCapita":0.3916,"TruckDelay":0,"AirPollutionEm":523469.0013,"FuelUse":23552804.7815,"VehicleCost":4.4212,"VehicleCostLow":27.4101},
  {"Scenario":"B1C2D2E2F1G3I2L2P2T3V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.3117,"WalkTravelPerCapita":0.4218,"TruckDelay":0,"AirPollutionEm":495504.088,"FuelUse":22379593.7736,"VehicleCost":3.96,"VehicleCostLow":22.992},
  {"Scenario":"B1C2D2E2F1G3I2L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7359,"WalkTravelPerCapita":0.4183,"TruckDelay":0,"AirPollutionEm":480832.5492,"FuelUse":21756338.5437,"VehicleCost":4.2806,"VehicleCostLow":24.8673},
  {"Scenario":"B1C2D2E2F1G3I3L1P1T1V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":14.9634,"WalkTravelPerCapita":0.3852,"TruckDelay":0,"AirPollutionEm":583652.5522,"FuelUse":25995227.0025,"VehicleCost":4.0259,"VehicleCostLow":24.9451},
  {"Scenario":"B1C2D2E2F1G3I3L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.4485,"WalkTravelPerCapita":0.3819,"TruckDelay":0,"AirPollutionEm":564437.4493,"FuelUse":25180381.9351,"VehicleCost":4.3458,"VehicleCostLow":27.0968},
  {"Scenario":"B1C2D2E2F1G3I3L2P1T2V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.5352,"WalkTravelPerCapita":0.3976,"TruckDelay":0,"AirPollutionEm":545118.2278,"FuelUse":24466798.9524,"VehicleCost":3.8305,"VehicleCostLow":25.6025},
  {"Scenario":"B1C2D2E2F1G3I3L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.9814,"WalkTravelPerCapita":0.3944,"TruckDelay":0,"AirPollutionEm":528089.4523,"FuelUse":23743479.8523,"VehicleCost":4.1325,"VehicleCostLow":27.7495},
  {"Scenario":"B1C2D2E2F1G3I3L2P2T3V1","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.4467,"WalkTravelPerCapita":0.4245,"TruckDelay":0,"AirPollutionEm":500148.7615,"FuelUse":22571676.0096,"VehicleCost":3.7045,"VehicleCostLow":23.2369},
  {"Scenario":"B1C2D2E2F1G3I3L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.8549,"WalkTravelPerCapita":0.4211,"TruckDelay":0,"AirPollutionEm":485449.3108,"FuelUse":21949373.261,"VehicleCost":3.9913,"VehicleCostLow":24.9923},
  {"Scenario":"B1C2D2E2F2G1I1L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"1","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.6385,"WalkTravelPerCapita":0.3486,"TruckDelay":0,"AirPollutionEm":740515.8439,"FuelUse":32347499.0858,"VehicleCost":4.9916,"VehicleCostLow":26.5408},
  {"Scenario":"B1C2D2E2F2G1I1L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"1","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.321,"WalkTravelPerCapita":0.3584,"TruckDelay":0,"AirPollutionEm":713010.9181,"FuelUse":31270216.8509,"VehicleCost":4.7819,"VehicleCostLow":27.309},
  {"Scenario":"B1C2D2E2F2G1I1L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.9781,"WalkTravelPerCapita":0.383,"TruckDelay":0,"AirPollutionEm":660235.5694,"FuelUse":29055633.5742,"VehicleCost":4.6352,"VehicleCostLow":24.5733},
  {"Scenario":"B1C2D2E2F2G1I2L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"1","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.6784,"WalkTravelPerCapita":0.3529,"TruckDelay":0,"AirPollutionEm":740237.3513,"FuelUse":32335234.1471,"VehicleCost":4.6365,"VehicleCostLow":26.7922},
  {"Scenario":"B1C2D2E2F2G1I2L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"1","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.2292,"WalkTravelPerCapita":0.3643,"TruckDelay":0,"AirPollutionEm":707723.5996,"FuelUse":31050893.0482,"VehicleCost":4.418,"VehicleCostLow":27.4061},
  {"Scenario":"B1C2D2E2F2G1I2L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.9223,"WalkTravelPerCapita":0.3889,"TruckDelay":0,"AirPollutionEm":655703.7401,"FuelUse":28866266.8251,"VehicleCost":4.2779,"VehicleCostLow":24.8644},
  {"Scenario":"B1C2D2E2F2G1I3L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"1","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.6349,"WalkTravelPerCapita":0.357,"TruckDelay":0,"AirPollutionEm":737014.8281,"FuelUse":32201810.0406,"VehicleCost":4.3422,"VehicleCostLow":27.0921},
  {"Scenario":"B1C2D2E2F2G1I3L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"1","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.2252,"WalkTravelPerCapita":0.3679,"TruckDelay":0,"AirPollutionEm":706609.9595,"FuelUse":31003718.6029,"VehicleCost":4.1295,"VehicleCostLow":27.7452},
  {"Scenario":"B1C2D2E2F2G1I3L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.9243,"WalkTravelPerCapita":0.3925,"TruckDelay":0,"AirPollutionEm":655182.3808,"FuelUse":28846602.7036,"VehicleCost":3.9886,"VehicleCostLow":24.9891},
  {"Scenario":"B1C2D2E2F2G2I1L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"2","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.1454,"WalkTravelPerCapita":0.357,"TruckDelay":0,"AirPollutionEm":676734.4445,"FuelUse":29698872.0701,"VehicleCost":4.9936,"VehicleCostLow":26.5439},
  {"Scenario":"B1C2D2E2F2G2I1L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"2","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.746,"WalkTravelPerCapita":0.3676,"TruckDelay":0,"AirPollutionEm":644481.0048,"FuelUse":28425004.312,"VehicleCost":4.7836,"VehicleCostLow":27.3118},
  {"Scenario":"B1C2D2E2F2G2I1L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4337,"WalkTravelPerCapita":0.3932,"TruckDelay":0,"AirPollutionEm":593493.3441,"FuelUse":26285057.8458,"VehicleCost":4.6367,"VehicleCostLow":24.5754},
  {"Scenario":"B1C2D2E2F2G2I2L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"2","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.2435,"WalkTravelPerCapita":0.361,"TruckDelay":0,"AirPollutionEm":678956.1859,"FuelUse":29790438.7764,"VehicleCost":4.6383,"VehicleCostLow":26.7953},
  {"Scenario":"B1C2D2E2F2G2I2L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"2","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.7054,"WalkTravelPerCapita":0.3733,"TruckDelay":0,"AirPollutionEm":641425.0837,"FuelUse":28298248.5247,"VehicleCost":4.4196,"VehicleCostLow":27.4087},
  {"Scenario":"B1C2D2E2F2G2I2L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4253,"WalkTravelPerCapita":0.3988,"TruckDelay":0,"AirPollutionEm":591130.6767,"FuelUse":26185524.5118,"VehicleCost":4.2793,"VehicleCostLow":24.8664},
  {"Scenario":"B1C2D2E2F2G2I3L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"2","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.2447,"WalkTravelPerCapita":0.365,"TruckDelay":0,"AirPollutionEm":677701.16,"FuelUse":29738632.2913,"VehicleCost":4.3439,"VehicleCostLow":27.0952},
  {"Scenario":"B1C2D2E2F2G2I3L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"2","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.7623,"WalkTravelPerCapita":0.3766,"TruckDelay":0,"AirPollutionEm":642798.879,"FuelUse":28354162.2914,"VehicleCost":4.131,"VehicleCostLow":27.7479},
  {"Scenario":"B1C2D2E2F2G2I3L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4885,"WalkTravelPerCapita":0.4021,"TruckDelay":0,"AirPollutionEm":593304.7674,"FuelUse":26277730.7224,"VehicleCost":3.99,"VehicleCostLow":24.9912},
  {"Scenario":"B1C2D2E2F2G3I1L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"3","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.2028,"WalkTravelPerCapita":0.3748,"TruckDelay":0,"AirPollutionEm":555628.4879,"FuelUse":24671178.1805,"VehicleCost":4.9956,"VehicleCostLow":26.5455},
  {"Scenario":"B1C2D2E2F2G3I1L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"3","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8274,"WalkTravelPerCapita":0.3862,"TruckDelay":0,"AirPollutionEm":521943.0289,"FuelUse":23339028.4446,"VehicleCost":4.7853,"VehicleCostLow":27.3134},
  {"Scenario":"B1C2D2E2F2G3I1L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6933,"WalkTravelPerCapita":0.413,"TruckDelay":0,"AirPollutionEm":478803.1699,"FuelUse":21525158.2105,"VehicleCost":4.6381,"VehicleCostLow":24.5765},
  {"Scenario":"B1C2D2E2F2G3I2L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"3","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.3791,"WalkTravelPerCapita":0.3783,"TruckDelay":0,"AirPollutionEm":561129.8141,"FuelUse":24899014.5096,"VehicleCost":4.6403,"VehicleCostLow":26.797},
  {"Scenario":"B1C2D2E2F2G3I2L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"3","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8558,"WalkTravelPerCapita":0.3914,"TruckDelay":0,"AirPollutionEm":521707.558,"FuelUse":23329007.0867,"VehicleCost":4.4212,"VehicleCostLow":27.4101},
  {"Scenario":"B1C2D2E2F2G3I2L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7416,"WalkTravelPerCapita":0.4181,"TruckDelay":0,"AirPollutionEm":478927.6475,"FuelUse":21528596.1624,"VehicleCost":4.2806,"VehicleCostLow":24.8673},
  {"Scenario":"B1C2D2E2F2G3I3L1P1T1V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"3","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.4529,"WalkTravelPerCapita":0.3818,"TruckDelay":0,"AirPollutionEm":562887.5943,"FuelUse":24971830.663,"VehicleCost":4.3458,"VehicleCostLow":27.0968},
  {"Scenario":"B1C2D2E2F2G3I3L2P1T2V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"3","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.9866,"WalkTravelPerCapita":0.3942,"TruckDelay":0,"AirPollutionEm":526146.4196,"FuelUse":23512403.1979,"VehicleCost":4.1325,"VehicleCostLow":27.7495},
  {"Scenario":"B1C2D2E2F2G3I3L2P2T3V2","B":"1","C":"2","D":"2","E":"2","F":"2","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.8606,"WalkTravelPerCapita":0.4209,"TruckDelay":0,"AirPollutionEm":483360.6616,"FuelUse":21714233.8612,"VehicleCost":3.9913,"VehicleCostLow":24.9923},
  {"Scenario":"B1C3D1E1F1G1I1L1P1T1V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.4145,"WalkTravelPerCapita":0.35,"TruckDelay":0,"AirPollutionEm":793356.3527,"FuelUse":34703525.1187,"VehicleCost":4.982,"VehicleCostLow":25.6975},
  {"Scenario":"B1C3D1E1F1G1I1L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.5883,"WalkTravelPerCapita":0.3491,"TruckDelay":0,"AirPollutionEm":739747.9026,"FuelUse":32457607.7549,"VehicleCost":5.4165,"VehicleCostLow":28.0985},
  {"Scenario":"B1C3D1E1F1G1I1L2P1T2V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":18.062,"WalkTravelPerCapita":0.3601,"TruckDelay":0,"AirPollutionEm":760830.1837,"FuelUse":33422501.4779,"VehicleCost":4.7796,"VehicleCostLow":26.4376},
  {"Scenario":"B1C3D1E1F1G1I1L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.2377,"WalkTravelPerCapita":0.3591,"TruckDelay":0,"AirPollutionEm":711597.6421,"FuelUse":31358847.6927,"VehicleCost":5.1912,"VehicleCostLow":28.8916},
  {"Scenario":"B1C3D1E1F1G1I1L2P2T3V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.7077,"WalkTravelPerCapita":0.385,"TruckDelay":0,"AirPollutionEm":702726.6444,"FuelUse":30982180.9231,"VehicleCost":4.6237,"VehicleCostLow":23.9193},
  {"Scenario":"B1C3D1E1F1G1I1L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8824,"WalkTravelPerCapita":0.3839,"TruckDelay":0,"AirPollutionEm":658428.6099,"FuelUse":29125854.1364,"VehicleCost":5.0313,"VehicleCostLow":25.9681},
  {"Scenario":"B1C3D1E1F1G1I2L1P1T1V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.4737,"WalkTravelPerCapita":0.3542,"TruckDelay":0,"AirPollutionEm":793216.0306,"FuelUse":34697393.1341,"VehicleCost":4.6299,"VehicleCostLow":25.8638},
  {"Scenario":"B1C3D1E1F1G1I2L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.6386,"WalkTravelPerCapita":0.3534,"TruckDelay":0,"AirPollutionEm":740150.1282,"FuelUse":32474055.2241,"VehicleCost":5.0324,"VehicleCostLow":28.3267},
  {"Scenario":"B1C3D1E1F1G1I2L2P1T2V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":17.9629,"WalkTravelPerCapita":0.366,"TruckDelay":0,"AirPollutionEm":754264.1461,"FuelUse":33149226.8494,"VehicleCost":4.4168,"VehicleCostLow":26.6126},
  {"Scenario":"B1C3D1E1F1G1I2L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.1378,"WalkTravelPerCapita":0.3651,"TruckDelay":0,"AirPollutionEm":705962.0129,"FuelUse":31124844.7028,"VehicleCost":4.7981,"VehicleCostLow":28.9898},
  {"Scenario":"B1C3D1E1F1G1I2L2P2T3V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.6376,"WalkTravelPerCapita":0.3909,"TruckDelay":0,"AirPollutionEm":697123.5214,"FuelUse":30750041.4287,"VehicleCost":4.2728,"VehicleCostLow":24.1245},
  {"Scenario":"B1C3D1E1F1G1I2L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8081,"WalkTravelPerCapita":0.3899,"TruckDelay":0,"AirPollutionEm":653377.8021,"FuelUse":28915573.7269,"VehicleCost":4.6444,"VehicleCostLow":26.2954},
  {"Scenario":"B1C3D1E1F1G1I3L1P1T1V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.4436,"WalkTravelPerCapita":0.3583,"TruckDelay":0,"AirPollutionEm":789914.3055,"FuelUse":34559750.7908,"VehicleCost":4.3443,"VehicleCostLow":26.2017},
  {"Scenario":"B1C3D1E1F1G1I3L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.6002,"WalkTravelPerCapita":0.3575,"TruckDelay":0,"AirPollutionEm":737587.7447,"FuelUse":32367050.4544,"VehicleCost":4.7153,"VehicleCostLow":28.666},
  {"Scenario":"B1C3D1E1F1G1I3L2P1T2V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":17.9961,"WalkTravelPerCapita":0.3695,"TruckDelay":0,"AirPollutionEm":754547.1547,"FuelUse":33161144.1568,"VehicleCost":4.1355,"VehicleCostLow":26.8794},
  {"Scenario":"B1C3D1E1F1G1I3L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.1575,"WalkTravelPerCapita":0.3686,"TruckDelay":0,"AirPollutionEm":705945.3122,"FuelUse":31124140.0927,"VehicleCost":4.4859,"VehicleCostLow":29.3611},
  {"Scenario":"B1C3D1E1F1G1I3L2P2T3V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.6785,"WalkTravelPerCapita":0.3943,"TruckDelay":0,"AirPollutionEm":697312.824,"FuelUse":30756747.7,"VehicleCost":3.9989,"VehicleCostLow":24.4097},
  {"Scenario":"B1C3D1E1F1G1I3L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8417,"WalkTravelPerCapita":0.3933,"TruckDelay":0,"AirPollutionEm":654111.2659,"FuelUse":28947590.418,"VehicleCost":4.3317,"VehicleCostLow":26.4359},
  {"Scenario":"B1C3D1E1F1G2I1L1P1T1V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":17.6589,"WalkTravelPerCapita":0.3599,"TruckDelay":0,"AirPollutionEm":709790.6228,"FuelUse":31232641.3311,"VehicleCost":4.9839,"VehicleCostLow":25.7001},
  {"Scenario":"B1C3D1E1F1G2I1L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.0084,"WalkTravelPerCapita":0.3579,"TruckDelay":0,"AirPollutionEm":672527.7452,"FuelUse":29667372.2034,"VehicleCost":5.4184,"VehicleCostLow":28.1012},
  {"Scenario":"B1C3D1E1F1G2I1L2P1T2V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.237,"WalkTravelPerCapita":0.3707,"TruckDelay":0,"AirPollutionEm":672933.4037,"FuelUse":29772740.3598,"VehicleCost":4.7812,"VehicleCostLow":26.44},
  {"Scenario":"B1C3D1E1F1G2I1L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.5817,"WalkTravelPerCapita":0.3687,"TruckDelay":0,"AirPollutionEm":639774.9409,"FuelUse":28378191.9659,"VehicleCost":5.1928,"VehicleCostLow":28.8941},
  {"Scenario":"B1C3D1E1F1G2I1L2P2T3V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":14.9571,"WalkTravelPerCapita":0.3966,"TruckDelay":0,"AirPollutionEm":619050.816,"FuelUse":27507808.6649,"VehicleCost":4.6252,"VehicleCostLow":23.921},
  {"Scenario":"B1C3D1E1F1G2I1L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2718,"WalkTravelPerCapita":0.3945,"TruckDelay":0,"AirPollutionEm":589039.4861,"FuelUse":26246660.2965,"VehicleCost":5.0327,"VehicleCostLow":25.9699},
  {"Scenario":"B1C3D1E1F1G2I2L1P1T1V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":17.7832,"WalkTravelPerCapita":0.3638,"TruckDelay":0,"AirPollutionEm":712928.6038,"FuelUse":31362723.514,"VehicleCost":4.6317,"VehicleCostLow":25.8664},
  {"Scenario":"B1C3D1E1F1G2I2L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.1167,"WalkTravelPerCapita":0.3619,"TruckDelay":0,"AirPollutionEm":675410.6917,"FuelUse":29786599.2326,"VehicleCost":5.0342,"VehicleCostLow":28.3295},
  {"Scenario":"B1C3D1E1F1G2I2L2P1T2V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.2011,"WalkTravelPerCapita":0.3764,"TruckDelay":0,"AirPollutionEm":669353.1422,"FuelUse":29623445.6627,"VehicleCost":4.4184,"VehicleCostLow":26.6148},
  {"Scenario":"B1C3D1E1F1G2I2L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.5394,"WalkTravelPerCapita":0.3744,"TruckDelay":0,"AirPollutionEm":636716.4358,"FuelUse":28251352.1048,"VehicleCost":4.7996,"VehicleCostLow":28.9922},
  {"Scenario":"B1C3D1E1F1G2I2L2P2T3V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":14.9358,"WalkTravelPerCapita":0.4022,"TruckDelay":0,"AirPollutionEm":615755.3007,"FuelUse":27371704.3199,"VehicleCost":4.2741,"VehicleCostLow":24.1261},
  {"Scenario":"B1C3D1E1F1G2I2L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2518,"WalkTravelPerCapita":0.4001,"TruckDelay":0,"AirPollutionEm":586373.5794,"FuelUse":26135055.7873,"VehicleCost":4.6457,"VehicleCostLow":26.2971},
  {"Scenario":"B1C3D1E1F1G2I3L1P1T1V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":17.7988,"WalkTravelPerCapita":0.3676,"TruckDelay":0,"AirPollutionEm":711850.3849,"FuelUse":31317729.1458,"VehicleCost":4.346,"VehicleCostLow":26.2043},
  {"Scenario":"B1C3D1E1F1G2I3L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.1265,"WalkTravelPerCapita":0.3658,"TruckDelay":0,"AirPollutionEm":675006.0838,"FuelUse":29769180.1654,"VehicleCost":4.7169,"VehicleCostLow":28.6687},
  {"Scenario":"B1C3D1E1F1G2I3L2P1T2V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.2948,"WalkTravelPerCapita":0.3795,"TruckDelay":0,"AirPollutionEm":672365.3829,"FuelUse":29748589.8902,"VehicleCost":4.1369,"VehicleCostLow":26.8818},
  {"Scenario":"B1C3D1E1F1G2I3L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.6186,"WalkTravelPerCapita":0.3776,"TruckDelay":0,"AirPollutionEm":639101.3407,"FuelUse":28349973.2887,"VehicleCost":4.4873,"VehicleCostLow":29.3636},
  {"Scenario":"B1C3D1E1F1G2I3L2P2T3V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.0357,"WalkTravelPerCapita":0.4053,"TruckDelay":0,"AirPollutionEm":618774.8231,"FuelUse":27495635.8388,"VehicleCost":4.0002,"VehicleCostLow":24.4114},
  {"Scenario":"B1C3D1E1F1G2I3L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.3438,"WalkTravelPerCapita":0.4032,"TruckDelay":0,"AirPollutionEm":589687.3336,"FuelUse":26274209.4883,"VehicleCost":4.3329,"VehicleCostLow":26.4378},
  {"Scenario":"B1C3D1E1F1G3I1L1P1T1V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":14.5165,"WalkTravelPerCapita":0.3797,"TruckDelay":0,"AirPollutionEm":567979.5323,"FuelUse":25344820.9511,"VehicleCost":4.9858,"VehicleCostLow":25.7013},
  {"Scenario":"B1C3D1E1F1G3I1L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.0252,"WalkTravelPerCapita":0.3761,"TruckDelay":0,"AirPollutionEm":550094.339,"FuelUse":24587158.9828,"VehicleCost":5.4203,"VehicleCostLow":28.1026},
  {"Scenario":"B1C3D1E1F1G3I1L2P1T2V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.1717,"WalkTravelPerCapita":0.3912,"TruckDelay":0,"AirPollutionEm":532159.7586,"FuelUse":23928808.8267,"VehicleCost":4.7827,"VehicleCostLow":26.4411},
  {"Scenario":"B1C3D1E1F1G3I1L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.6397,"WalkTravelPerCapita":0.3876,"TruckDelay":0,"AirPollutionEm":516343.2984,"FuelUse":23257693.5553,"VehicleCost":5.1944,"VehicleCostLow":28.8955},
  {"Scenario":"B1C3D1E1F1G3I1L2P2T3V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.0901,"WalkTravelPerCapita":0.4182,"TruckDelay":0,"AirPollutionEm":488248.5053,"FuelUse":22078631.6493,"VehicleCost":4.6265,"VehicleCostLow":23.9218},
  {"Scenario":"B1C3D1E1F1G3I1L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.5188,"WalkTravelPerCapita":0.4145,"TruckDelay":0,"AirPollutionEm":473971.1818,"FuelUse":21473383.6535,"VehicleCost":5.034,"VehicleCostLow":25.9708},
  {"Scenario":"B1C3D1E1F1G3I2L1P1T1V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":14.7045,"WalkTravelPerCapita":0.3831,"TruckDelay":0,"AirPollutionEm":574237.7794,"FuelUse":25603980.6325,"VehicleCost":4.6335,"VehicleCostLow":25.8676},
  {"Scenario":"B1C3D1E1F1G3I2L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.2029,"WalkTravelPerCapita":0.3796,"TruckDelay":0,"AirPollutionEm":555883.2239,"FuelUse":24826906.0964,"VehicleCost":5.036,"VehicleCostLow":28.3309},
  {"Scenario":"B1C3D1E1F1G3I2L2P1T2V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.211,"WalkTravelPerCapita":0.3963,"TruckDelay":0,"AirPollutionEm":532149.994,"FuelUse":23927820.691,"VehicleCost":4.4198,"VehicleCostLow":26.6159},
  {"Scenario":"B1C3D1E1F1G3I2L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.6661,"WalkTravelPerCapita":0.3929,"TruckDelay":0,"AirPollutionEm":516251.1473,"FuelUse":23254101.8237,"VehicleCost":4.801,"VehicleCostLow":28.9934},
  {"Scenario":"B1C3D1E1F1G3I2L2P2T3V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.141,"WalkTravelPerCapita":0.4232,"TruckDelay":0,"AirPollutionEm":488270.4582,"FuelUse":22079906.9009,"VehicleCost":4.2753,"VehicleCostLow":24.1268},
  {"Scenario":"B1C3D1E1F1G3I2L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.5575,"WalkTravelPerCapita":0.4197,"TruckDelay":0,"AirPollutionEm":473817.221,"FuelUse":21465763.0832,"VehicleCost":4.647,"VehicleCostLow":26.2978},
  {"Scenario":"B1C3D1E1F1G3I3L1P1T1V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":14.7964,"WalkTravelPerCapita":0.3864,"TruckDelay":0,"AirPollutionEm":576652.6321,"FuelUse":25704392.6531,"VehicleCost":4.3477,"VehicleCostLow":26.2055},
  {"Scenario":"B1C3D1E1F1G3I3L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.2824,"WalkTravelPerCapita":0.383,"TruckDelay":0,"AirPollutionEm":558317.786,"FuelUse":24927018.4802,"VehicleCost":4.7187,"VehicleCostLow":28.6701},
  {"Scenario":"B1C3D1E1F1G3I3L2P1T2V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.3678,"WalkTravelPerCapita":0.3989,"TruckDelay":0,"AirPollutionEm":537985.2491,"FuelUse":24170407.3811,"VehicleCost":4.1383,"VehicleCostLow":26.8829},
  {"Scenario":"B1C3D1E1F1G3I3L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.813,"WalkTravelPerCapita":0.3956,"TruckDelay":0,"AirPollutionEm":521451.9415,"FuelUse":23469212.2164,"VehicleCost":4.4887,"VehicleCostLow":29.3649},
  {"Scenario":"B1C3D1E1F1G3I3L2P2T3V1","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.2912,"WalkTravelPerCapita":0.4258,"TruckDelay":0,"AirPollutionEm":493608.4858,"FuelUse":22300373.803,"VehicleCost":4.0014,"VehicleCostLow":24.4122},
  {"Scenario":"B1C3D1E1F1G3I3L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7001,"WalkTravelPerCapita":0.4224,"TruckDelay":0,"AirPollutionEm":479298.2567,"FuelUse":21694816.4955,"VehicleCost":4.3342,"VehicleCostLow":26.4386},
  {"Scenario":"B1C3D1E1F2G1I1L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"1","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.5897,"WalkTravelPerCapita":0.3491,"TruckDelay":0,"AirPollutionEm":738389.4575,"FuelUse":32259546.3602,"VehicleCost":5.4165,"VehicleCostLow":28.0985},
  {"Scenario":"B1C3D1E1F2G1I1L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"1","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.2394,"WalkTravelPerCapita":0.359,"TruckDelay":0,"AirPollutionEm":709836.2179,"FuelUse":31138387.9067,"VehicleCost":5.1912,"VehicleCostLow":28.8916},
  {"Scenario":"B1C3D1E1F2G1I1L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8844,"WalkTravelPerCapita":0.3838,"TruckDelay":0,"AirPollutionEm":656500.0255,"FuelUse":28900391.5789,"VehicleCost":5.0313,"VehicleCostLow":25.968},
  {"Scenario":"B1C3D1E1F2G1I2L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"1","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.6402,"WalkTravelPerCapita":0.3533,"TruckDelay":0,"AirPollutionEm":738577.6121,"FuelUse":32267250.5927,"VehicleCost":5.0324,"VehicleCostLow":28.3267},
  {"Scenario":"B1C3D1E1F2G1I2L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"1","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.1396,"WalkTravelPerCapita":0.365,"TruckDelay":0,"AirPollutionEm":703907.4102,"FuelUse":30892220.2593,"VehicleCost":4.7981,"VehicleCostLow":28.9898},
  {"Scenario":"B1C3D1E1F2G1I2L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8102,"WalkTravelPerCapita":0.3898,"TruckDelay":0,"AirPollutionEm":651151.4467,"FuelUse":28677768.7741,"VehicleCost":4.6444,"VehicleCostLow":26.2954},
  {"Scenario":"B1C3D1E1F2G1I3L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"1","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.6018,"WalkTravelPerCapita":0.3574,"TruckDelay":0,"AirPollutionEm":735800.34,"FuelUse":32151372.8808,"VehicleCost":4.7153,"VehicleCostLow":28.666},
  {"Scenario":"B1C3D1E1F2G1I3L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"1","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.1593,"WalkTravelPerCapita":0.3685,"TruckDelay":0,"AirPollutionEm":703706.186,"FuelUse":30883971.8824,"VehicleCost":4.4859,"VehicleCostLow":29.3611},
  {"Scenario":"B1C3D1E1F2G1I3L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8438,"WalkTravelPerCapita":0.3933,"TruckDelay":0,"AirPollutionEm":651697.2767,"FuelUse":28702118.5967,"VehicleCost":4.3317,"VehicleCostLow":26.4359},
  {"Scenario":"B1C3D1E1F2G2I1L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"2","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.0109,"WalkTravelPerCapita":0.3579,"TruckDelay":0,"AirPollutionEm":671257.9406,"FuelUse":29472083.3161,"VehicleCost":5.4184,"VehicleCostLow":28.1012},
  {"Scenario":"B1C3D1E1F2G2I1L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"2","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.5846,"WalkTravelPerCapita":0.3686,"TruckDelay":0,"AirPollutionEm":638125.8376,"FuelUse":28161292.5836,"VehicleCost":5.1928,"VehicleCostLow":28.8941},
  {"Scenario":"B1C3D1E1F2G2I1L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2751,"WalkTravelPerCapita":0.3944,"TruckDelay":0,"AirPollutionEm":587236.0142,"FuelUse":26025254.9595,"VehicleCost":5.0327,"VehicleCostLow":25.9699},
  {"Scenario":"B1C3D1E1F2G2I2L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"2","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.1193,"WalkTravelPerCapita":0.3618,"TruckDelay":0,"AirPollutionEm":673931.0102,"FuelUse":29582789.9107,"VehicleCost":5.0342,"VehicleCostLow":28.3295},
  {"Scenario":"B1C3D1E1F2G2I2L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"2","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.5426,"WalkTravelPerCapita":0.3744,"TruckDelay":0,"AirPollutionEm":634782.5597,"FuelUse":28022685.3181,"VehicleCost":4.7996,"VehicleCostLow":28.9922},
  {"Scenario":"B1C3D1E1F2G2I2L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2554,"WalkTravelPerCapita":0.4,"TruckDelay":0,"AirPollutionEm":584279.5908,"FuelUse":25901659.2071,"VehicleCost":4.6457,"VehicleCostLow":26.2971},
  {"Scenario":"B1C3D1E1F2G2I3L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"2","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.1292,"WalkTravelPerCapita":0.3657,"TruckDelay":0,"AirPollutionEm":673315.7618,"FuelUse":29556710.5438,"VehicleCost":4.7169,"VehicleCostLow":28.6687},
  {"Scenario":"B1C3D1E1F2G2I3L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"2","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.6219,"WalkTravelPerCapita":0.3775,"TruckDelay":0,"AirPollutionEm":636983.3681,"FuelUse":28113840.1476,"VehicleCost":4.4873,"VehicleCostLow":29.3636},
  {"Scenario":"B1C3D1E1F2G2I3L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.3474,"WalkTravelPerCapita":0.4031,"TruckDelay":0,"AirPollutionEm":587406.6757,"FuelUse":26033247.9444,"VehicleCost":4.3329,"VehicleCostLow":26.4378},
  {"Scenario":"B1C3D1E1F2G3I1L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"3","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.029,"WalkTravelPerCapita":0.376,"TruckDelay":0,"AirPollutionEm":548951.0055,"FuelUse":24394911.8773,"VehicleCost":5.4203,"VehicleCostLow":28.1026},
  {"Scenario":"B1C3D1E1F2G3I1L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"3","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.6443,"WalkTravelPerCapita":0.3875,"TruckDelay":0,"AirPollutionEm":514855.6851,"FuelUse":23044997.3824,"VehicleCost":5.1944,"VehicleCostLow":28.8955},
  {"Scenario":"B1C3D1E1F2G3I1L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.524,"WalkTravelPerCapita":0.4143,"TruckDelay":0,"AirPollutionEm":472346.2921,"FuelUse":21257003.3469,"VehicleCost":5.034,"VehicleCostLow":25.9708},
  {"Scenario":"B1C3D1E1F2G3I2L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"3","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.207,"WalkTravelPerCapita":0.3795,"TruckDelay":0,"AirPollutionEm":554538.9165,"FuelUse":24626606.1402,"VehicleCost":5.036,"VehicleCostLow":28.3309},
  {"Scenario":"B1C3D1E1F2G3I2L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"3","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.6712,"WalkTravelPerCapita":0.3928,"TruckDelay":0,"AirPollutionEm":514494.3055,"FuelUse":23030353.2805,"VehicleCost":4.801,"VehicleCostLow":28.9934},
  {"Scenario":"B1C3D1E1F2G3I2L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.5631,"WalkTravelPerCapita":0.4195,"TruckDelay":0,"AirPollutionEm":471917.7202,"FuelUse":21238112.1531,"VehicleCost":4.647,"VehicleCostLow":26.2978},
  {"Scenario":"B1C3D1E1F2G3I3L1P1T1V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"3","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.2868,"WalkTravelPerCapita":0.3829,"TruckDelay":0,"AirPollutionEm":556770.7806,"FuelUse":24718473.9656,"VehicleCost":4.7187,"VehicleCostLow":28.6701},
  {"Scenario":"B1C3D1E1F2G3I3L2P1T2V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"3","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.8182,"WalkTravelPerCapita":0.3954,"TruckDelay":0,"AirPollutionEm":519513.2747,"FuelUse":23238189.4126,"VehicleCost":4.4887,"VehicleCostLow":29.3649},
  {"Scenario":"B1C3D1E1F2G3I3L2P2T3V2","B":"1","C":"3","D":"1","E":"1","F":"2","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7059,"WalkTravelPerCapita":0.4222,"TruckDelay":0,"AirPollutionEm":477214.0516,"FuelUse":21459746.7957,"VehicleCost":4.3342,"VehicleCostLow":26.4386},
  {"Scenario":"B1C3D2E2F1G1I1L1P1T1V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.2887,"WalkTravelPerCapita":0.3505,"TruckDelay":0,"AirPollutionEm":788048.4459,"FuelUse":34483772.338,"VehicleCost":4.982,"VehicleCostLow":25.6973},
  {"Scenario":"B1C3D2E2F1G1I1L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.4587,"WalkTravelPerCapita":0.3497,"TruckDelay":0,"AirPollutionEm":734529.6069,"FuelUse":32241094.8851,"VehicleCost":5.4165,"VehicleCostLow":28.0983},
  {"Scenario":"B1C3D2E2F1G1I1L2P1T2V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":17.9512,"WalkTravelPerCapita":0.3605,"TruckDelay":0,"AirPollutionEm":756012.4063,"FuelUse":33222801.4146,"VehicleCost":4.7796,"VehicleCostLow":26.4375},
  {"Scenario":"B1C3D2E2F1G1I1L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.1249,"WalkTravelPerCapita":0.3596,"TruckDelay":0,"AirPollutionEm":706991.6921,"FuelUse":31168013.3191,"VehicleCost":5.1912,"VehicleCostLow":28.8915},
  {"Scenario":"B1C3D2E2F1G1I1L2P2T3V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.6098,"WalkTravelPerCapita":0.3855,"TruckDelay":0,"AirPollutionEm":698438.0619,"FuelUse":30804220.9452,"VehicleCost":4.6237,"VehicleCostLow":23.9192},
  {"Scenario":"B1C3D2E2F1G1I1L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.7817,"WalkTravelPerCapita":0.3844,"TruckDelay":0,"AirPollutionEm":654097.3371,"FuelUse":28945185.8009,"VehicleCost":5.0312,"VehicleCostLow":25.9679},
  {"Scenario":"B1C3D2E2F1G1I2L1P1T1V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.3457,"WalkTravelPerCapita":0.3548,"TruckDelay":0,"AirPollutionEm":787732.7672,"FuelUse":34469790.1067,"VehicleCost":4.6298,"VehicleCostLow":25.8637},
  {"Scenario":"B1C3D2E2F1G1I2L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.5073,"WalkTravelPerCapita":0.3539,"TruckDelay":0,"AirPollutionEm":734893.1715,"FuelUse":32255402.9605,"VehicleCost":5.0324,"VehicleCostLow":28.3266},
  {"Scenario":"B1C3D2E2F1G1I2L2P1T2V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":17.8672,"WalkTravelPerCapita":0.3664,"TruckDelay":0,"AirPollutionEm":750118.1793,"FuelUse":32977548.3635,"VehicleCost":4.4168,"VehicleCostLow":26.6125},
  {"Scenario":"B1C3D2E2F1G1I2L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.0384,"WalkTravelPerCapita":0.3655,"TruckDelay":0,"AirPollutionEm":701968.5576,"FuelUse":30959817.8654,"VehicleCost":4.798,"VehicleCostLow":28.9897},
  {"Scenario":"B1C3D2E2F1G1I2L2P2T3V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.5589,"WalkTravelPerCapita":0.3913,"TruckDelay":0,"AirPollutionEm":693686.1404,"FuelUse":30607491.8813,"VehicleCost":4.2727,"VehicleCostLow":24.1245},
  {"Scenario":"B1C3D2E2F1G1I2L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.726,"WalkTravelPerCapita":0.3902,"TruckDelay":0,"AirPollutionEm":650021.6168,"FuelUse":28776746.2842,"VehicleCost":4.6444,"VehicleCostLow":26.2953},
  {"Scenario":"B1C3D2E2F1G1I3L1P1T1V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":19.315,"WalkTravelPerCapita":0.3589,"TruckDelay":0,"AirPollutionEm":784447.2714,"FuelUse":34332980.8367,"VehicleCost":4.3442,"VehicleCostLow":26.2016},
  {"Scenario":"B1C3D2E2F1G1I3L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.4689,"WalkTravelPerCapita":0.358,"TruckDelay":0,"AirPollutionEm":732406.6743,"FuelUse":32152141.343,"VehicleCost":4.7152,"VehicleCostLow":28.6659},
  {"Scenario":"B1C3D2E2F1G1I3L2P1T2V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":17.8851,"WalkTravelPerCapita":0.37,"TruckDelay":0,"AirPollutionEm":749532.2,"FuelUse":32952366.2268,"VehicleCost":4.1354,"VehicleCostLow":26.8793},
  {"Scenario":"B1C3D2E2F1G1I3L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.0416,"WalkTravelPerCapita":0.3691,"TruckDelay":0,"AirPollutionEm":701275.516,"FuelUse":30930711.1057,"VehicleCost":4.4858,"VehicleCostLow":29.361},
  {"Scenario":"B1C3D2E2F1G1I3L2P2T3V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.5792,"WalkTravelPerCapita":0.3948,"TruckDelay":0,"AirPollutionEm":693003.586,"FuelUse":30577872.1039,"VehicleCost":3.9989,"VehicleCostLow":24.4096},
  {"Scenario":"B1C3D2E2F1G1I3L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.7389,"WalkTravelPerCapita":0.3938,"TruckDelay":0,"AirPollutionEm":649901.2331,"FuelUse":28773101.5719,"VehicleCost":4.3316,"VehicleCostLow":26.4358},
  {"Scenario":"B1C3D2E2F1G2I1L1P1T1V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":17.5651,"WalkTravelPerCapita":0.3603,"TruckDelay":0,"AirPollutionEm":705977.9493,"FuelUse":31074970.7284,"VehicleCost":4.9839,"VehicleCostLow":25.6999},
  {"Scenario":"B1C3D2E2F1G2I1L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":17.9112,"WalkTravelPerCapita":0.3584,"TruckDelay":0,"AirPollutionEm":668683.799,"FuelUse":29507720.1412,"VehicleCost":5.4184,"VehicleCostLow":28.1011},
  {"Scenario":"B1C3D2E2F1G2I1L2P1T2V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.1588,"WalkTravelPerCapita":0.3711,"TruckDelay":0,"AirPollutionEm":669638.8806,"FuelUse":29636267.577,"VehicleCost":4.7812,"VehicleCostLow":26.4399},
  {"Scenario":"B1C3D2E2F1G2I1L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.4973,"WalkTravelPerCapita":0.3691,"TruckDelay":0,"AirPollutionEm":636423.0501,"FuelUse":28239555.2426,"VehicleCost":5.1928,"VehicleCostLow":28.894},
  {"Scenario":"B1C3D2E2F1G2I1L2P2T3V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":14.887,"WalkTravelPerCapita":0.397,"TruckDelay":0,"AirPollutionEm":616070.5736,"FuelUse":27384109.9393,"VehicleCost":4.6251,"VehicleCostLow":23.9209},
  {"Scenario":"B1C3D2E2F1G2I1L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.1999,"WalkTravelPerCapita":0.3948,"TruckDelay":0,"AirPollutionEm":585961.137,"FuelUse":26117829.756,"VehicleCost":5.0326,"VehicleCostLow":25.9698},
  {"Scenario":"B1C3D2E2F1G2I2L1P1T1V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":17.688,"WalkTravelPerCapita":0.3642,"TruckDelay":0,"AirPollutionEm":708989.7844,"FuelUse":31199352.3257,"VehicleCost":4.6316,"VehicleCostLow":25.8663},
  {"Scenario":"B1C3D2E2F1G2I2L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.0171,"WalkTravelPerCapita":0.3624,"TruckDelay":0,"AirPollutionEm":671527.1814,"FuelUse":29625048.4667,"VehicleCost":5.0341,"VehicleCostLow":28.3294},
  {"Scenario":"B1C3D2E2F1G2I2L2P1T2V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.133,"WalkTravelPerCapita":0.3767,"TruckDelay":0,"AirPollutionEm":666472.9271,"FuelUse":29504041.6503,"VehicleCost":4.4183,"VehicleCostLow":26.6148},
  {"Scenario":"B1C3D2E2F1G2I2L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.4676,"WalkTravelPerCapita":0.3748,"TruckDelay":0,"AirPollutionEm":633875.6497,"FuelUse":28133970.8269,"VehicleCost":4.7995,"VehicleCostLow":28.9921},
  {"Scenario":"B1C3D2E2F1G2I2L2P2T3V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":14.8817,"WalkTravelPerCapita":0.4025,"TruckDelay":0,"AirPollutionEm":613446.207,"FuelUse":27275776.8713,"VehicleCost":4.2741,"VehicleCostLow":24.1261},
  {"Scenario":"B1C3D2E2F1G2I2L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.1929,"WalkTravelPerCapita":0.4004,"TruckDelay":0,"AirPollutionEm":583988.087,"FuelUse":26036478.552,"VehicleCost":4.6457,"VehicleCostLow":26.297},
  {"Scenario":"B1C3D2E2F1G2I3L1P1T1V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":17.7013,"WalkTravelPerCapita":0.3681,"TruckDelay":0,"AirPollutionEm":707830.6601,"FuelUse":31150840.8835,"VehicleCost":4.3459,"VehicleCostLow":26.2042},
  {"Scenario":"B1C3D2E2F1G2I3L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.025,"WalkTravelPerCapita":0.3662,"TruckDelay":0,"AirPollutionEm":671092.5184,"FuelUse":29606768.7157,"VehicleCost":4.7169,"VehicleCostLow":28.6686},
  {"Scenario":"B1C3D2E2F1G2I3L2P1T2V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":16.2128,"WalkTravelPerCapita":0.3799,"TruckDelay":0,"AirPollutionEm":668751.6419,"FuelUse":29598079.0207,"VehicleCost":4.1368,"VehicleCostLow":26.8817},
  {"Scenario":"B1C3D2E2F1G2I3L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.5305,"WalkTravelPerCapita":0.378,"TruckDelay":0,"AirPollutionEm":635624.5256,"FuelUse":28205969.7036,"VehicleCost":4.4872,"VehicleCostLow":29.3635},
  {"Scenario":"B1C3D2E2F1G2I3L2P2T3V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":14.962,"WalkTravelPerCapita":0.4057,"TruckDelay":0,"AirPollutionEm":615689.0027,"FuelUse":27367594.3528,"VehicleCost":4.0002,"VehicleCostLow":24.4113},
  {"Scenario":"B1C3D2E2F1G2I3L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2665,"WalkTravelPerCapita":0.4036,"TruckDelay":0,"AirPollutionEm":586586.0039,"FuelUse":26145636.3397,"VehicleCost":4.3329,"VehicleCostLow":26.4377},
  {"Scenario":"B1C3D2E2F1G3I1L1P1T1V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"1","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":14.4623,"WalkTravelPerCapita":0.38,"TruckDelay":0,"AirPollutionEm":565905.3407,"FuelUse":25259198.0849,"VehicleCost":4.9857,"VehicleCostLow":25.7012},
  {"Scenario":"B1C3D2E2F1G3I1L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":14.9673,"WalkTravelPerCapita":0.3764,"TruckDelay":0,"AirPollutionEm":547863.7813,"FuelUse":24494311.675,"VehicleCost":5.4203,"VehicleCostLow":28.1025},
  {"Scenario":"B1C3D2E2F1G3I1L2P1T2V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.1279,"WalkTravelPerCapita":0.3914,"TruckDelay":0,"AirPollutionEm":530459.9582,"FuelUse":23858698.4069,"VehicleCost":4.7827,"VehicleCostLow":26.4411},
  {"Scenario":"B1C3D2E2F1G3I1L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.5911,"WalkTravelPerCapita":0.3879,"TruckDelay":0,"AirPollutionEm":514469.4459,"FuelUse":23180238.0908,"VehicleCost":5.1943,"VehicleCostLow":28.8954},
  {"Scenario":"B1C3D2E2F1G3I1L2P2T3V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.0519,"WalkTravelPerCapita":0.4184,"TruckDelay":0,"AirPollutionEm":486696.5878,"FuelUse":22014039.7721,"VehicleCost":4.6264,"VehicleCostLow":23.9218},
  {"Scenario":"B1C3D2E2F1G3I1L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.4777,"WalkTravelPerCapita":0.4148,"TruckDelay":0,"AirPollutionEm":472213.2819,"FuelUse":21399358.6118,"VehicleCost":5.034,"VehicleCostLow":25.9708},
  {"Scenario":"B1C3D2E2F1G3I2L1P1T1V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"2","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":14.6495,"WalkTravelPerCapita":0.3834,"TruckDelay":0,"AirPollutionEm":572114.9618,"FuelUse":25516212.3193,"VehicleCost":4.6334,"VehicleCostLow":25.8676},
  {"Scenario":"B1C3D2E2F1G3I2L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.1427,"WalkTravelPerCapita":0.38,"TruckDelay":0,"AirPollutionEm":553633.6757,"FuelUse":24733305.2651,"VehicleCost":5.036,"VehicleCostLow":28.3308},
  {"Scenario":"B1C3D2E2F1G3I2L2P1T2V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.1755,"WalkTravelPerCapita":0.3965,"TruckDelay":0,"AirPollutionEm":530709.8987,"FuelUse":23868062.9322,"VehicleCost":4.4197,"VehicleCostLow":26.6159},
  {"Scenario":"B1C3D2E2F1G3I2L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.6263,"WalkTravelPerCapita":0.3931,"TruckDelay":0,"AirPollutionEm":514721.2328,"FuelUse":23190957.786,"VehicleCost":4.801,"VehicleCostLow":28.9933},
  {"Scenario":"B1C3D2E2F1G3I2L2P2T3V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.1128,"WalkTravelPerCapita":0.4234,"TruckDelay":0,"AirPollutionEm":487131.3927,"FuelUse":22032558.4742,"VehicleCost":4.2753,"VehicleCostLow":24.1268},
  {"Scenario":"B1C3D2E2F1G3I2L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.5254,"WalkTravelPerCapita":0.4199,"TruckDelay":0,"AirPollutionEm":472520.279,"FuelUse":21412343.9035,"VehicleCost":4.647,"VehicleCostLow":26.2978},
  {"Scenario":"B1C3D2E2F1G3I3L1P1T1V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"3","L":"1","P":"1","T":"1","V":"1","GHGReduction":0,"DVMTPerCapita":14.7406,"WalkTravelPerCapita":0.3867,"TruckDelay":0,"AirPollutionEm":574481.8292,"FuelUse":25614133.5658,"VehicleCost":4.3477,"VehicleCostLow":26.2054},
  {"Scenario":"B1C3D2E2F1G3I3L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.2202,"WalkTravelPerCapita":0.3834,"TruckDelay":0,"AirPollutionEm":556013.5663,"FuelUse":24831208.6793,"VehicleCost":4.7187,"VehicleCostLow":28.67},
  {"Scenario":"B1C3D2E2F1G3I3L2P1T2V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"1","T":"2","V":"1","GHGReduction":0,"DVMTPerCapita":13.3216,"WalkTravelPerCapita":0.3991,"TruckDelay":0,"AirPollutionEm":536025.33,"FuelUse":24088711.2957,"VehicleCost":4.1382,"VehicleCostLow":26.8829},
  {"Scenario":"B1C3D2E2F1G3I3L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.7619,"WalkTravelPerCapita":0.3959,"TruckDelay":0,"AirPollutionEm":519470.545,"FuelUse":23387044.0807,"VehicleCost":4.4887,"VehicleCostLow":29.3649},
  {"Scenario":"B1C3D2E2F1G3I3L2P2T3V1","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.2479,"WalkTravelPerCapita":0.426,"TruckDelay":0,"AirPollutionEm":491871.7332,"FuelUse":22228200.2183,"VehicleCost":4.0014,"VehicleCostLow":24.4121},
  {"Scenario":"B1C3D2E2F1G3I3L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6551,"WalkTravelPerCapita":0.4226,"TruckDelay":0,"AirPollutionEm":477526.678,"FuelUse":21621198.0636,"VehicleCost":4.3341,"VehicleCostLow":26.4386},
  {"Scenario":"B1C3D2E2F2G1I1L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"1","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.4601,"WalkTravelPerCapita":0.3496,"TruckDelay":0,"AirPollutionEm":733174.5299,"FuelUse":32043080.5303,"VehicleCost":5.4165,"VehicleCostLow":28.0983},
  {"Scenario":"B1C3D2E2F2G1I1L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"1","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.1266,"WalkTravelPerCapita":0.3595,"TruckDelay":0,"AirPollutionEm":705234.8173,"FuelUse":30947649.9657,"VehicleCost":5.1912,"VehicleCostLow":28.8915},
  {"Scenario":"B1C3D2E2F2G1I1L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.7836,"WalkTravelPerCapita":0.3843,"TruckDelay":0,"AirPollutionEm":652173.2612,"FuelUse":28719822.9319,"VehicleCost":5.0312,"VehicleCostLow":25.9679},
  {"Scenario":"B1C3D2E2F2G1I2L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"1","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.5088,"WalkTravelPerCapita":0.3539,"TruckDelay":0,"AirPollutionEm":733325.3331,"FuelUse":32048699.8931,"VehicleCost":5.0324,"VehicleCostLow":28.3266},
  {"Scenario":"B1C3D2E2F2G1I2L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"1","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.0402,"WalkTravelPerCapita":0.3655,"TruckDelay":0,"AirPollutionEm":699919.4969,"FuelUse":30727339.5493,"VehicleCost":4.798,"VehicleCostLow":28.9897},
  {"Scenario":"B1C3D2E2F2G1I2L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.728,"WalkTravelPerCapita":0.3902,"TruckDelay":0,"AirPollutionEm":647800.9354,"FuelUse":28539101.2299,"VehicleCost":4.6444,"VehicleCostLow":26.2953},
  {"Scenario":"B1C3D2E2F2G1I3L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"1","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":19.4705,"WalkTravelPerCapita":0.358,"TruckDelay":0,"AirPollutionEm":730624.7247,"FuelUse":31936598.1333,"VehicleCost":4.7152,"VehicleCostLow":28.6659},
  {"Scenario":"B1C3D2E2F2G1I3L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"1","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":18.0434,"WalkTravelPerCapita":0.369,"TruckDelay":0,"AirPollutionEm":699043.3981,"FuelUse":30690741.0509,"VehicleCost":4.4858,"VehicleCostLow":29.361},
  {"Scenario":"B1C3D2E2F2G1I3L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.7409,"WalkTravelPerCapita":0.3938,"TruckDelay":0,"AirPollutionEm":647494.4187,"FuelUse":28527839.6457,"VehicleCost":4.3316,"VehicleCostLow":26.4358},
  {"Scenario":"B1C3D2E2F2G2I1L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"2","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":17.9137,"WalkTravelPerCapita":0.3583,"TruckDelay":0,"AirPollutionEm":667416.8055,"FuelUse":29312466.0486,"VehicleCost":5.4184,"VehicleCostLow":28.1011},
  {"Scenario":"B1C3D2E2F2G2I1L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"2","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.5002,"WalkTravelPerCapita":0.369,"TruckDelay":0,"AirPollutionEm":634777.9598,"FuelUse":28022739.5865,"VehicleCost":5.1928,"VehicleCostLow":28.894},
  {"Scenario":"B1C3D2E2F2G2I1L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2032,"WalkTravelPerCapita":0.3947,"TruckDelay":0,"AirPollutionEm":584161.758,"FuelUse":25896516.5869,"VehicleCost":5.0326,"VehicleCostLow":25.9698},
  {"Scenario":"B1C3D2E2F2G2I2L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"2","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.0197,"WalkTravelPerCapita":0.3623,"TruckDelay":0,"AirPollutionEm":670051.4524,"FuelUse":29421320.8992,"VehicleCost":5.0341,"VehicleCostLow":28.3294},
  {"Scenario":"B1C3D2E2F2G2I2L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"2","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.4708,"WalkTravelPerCapita":0.3747,"TruckDelay":0,"AirPollutionEm":631946.6255,"FuelUse":27905432.1004,"VehicleCost":4.7995,"VehicleCostLow":28.9921},
  {"Scenario":"B1C3D2E2F2G2I2L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.1965,"WalkTravelPerCapita":0.4003,"TruckDelay":0,"AirPollutionEm":581899.0734,"FuelUse":25803222.2337,"VehicleCost":4.6457,"VehicleCostLow":26.297},
  {"Scenario":"B1C3D2E2F2G2I3L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"2","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":18.0277,"WalkTravelPerCapita":0.3662,"TruckDelay":0,"AirPollutionEm":669406.8934,"FuelUse":29394412.0506,"VehicleCost":4.7169,"VehicleCostLow":28.6686},
  {"Scenario":"B1C3D2E2F2G2I3L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"2","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":16.5338,"WalkTravelPerCapita":0.3779,"TruckDelay":0,"AirPollutionEm":633512.5193,"FuelUse":27970000.3457,"VehicleCost":4.4872,"VehicleCostLow":29.3635},
  {"Scenario":"B1C3D2E2F2G2I3L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2701,"WalkTravelPerCapita":0.4035,"TruckDelay":0,"AirPollutionEm":584311.2775,"FuelUse":25904840.4453,"VehicleCost":4.3329,"VehicleCostLow":26.4377},
  {"Scenario":"B1C3D2E2F2G3I1L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"3","I":"1","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":14.971,"WalkTravelPerCapita":0.3763,"TruckDelay":0,"AirPollutionEm":546722.612,"FuelUse":24302090.1038,"VehicleCost":5.4203,"VehicleCostLow":28.1025},
  {"Scenario":"B1C3D2E2F2G3I1L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"3","I":"1","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.5957,"WalkTravelPerCapita":0.3877,"TruckDelay":0,"AirPollutionEm":512985.1164,"FuelUse":22967617.9987,"VehicleCost":5.1943,"VehicleCostLow":28.8954},
  {"Scenario":"B1C3D2E2F2G3I1L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.4829,"WalkTravelPerCapita":0.4146,"TruckDelay":0,"AirPollutionEm":470591.4571,"FuelUse":21183053.2854,"VehicleCost":5.034,"VehicleCostLow":25.9708},
  {"Scenario":"B1C3D2E2F2G3I2L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"3","I":"2","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.1468,"WalkTravelPerCapita":0.3798,"TruckDelay":0,"AirPollutionEm":552292.456,"FuelUse":24533067.0659,"VehicleCost":5.036,"VehicleCostLow":28.3308},
  {"Scenario":"B1C3D2E2F2G3I2L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"3","I":"2","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.6314,"WalkTravelPerCapita":0.393,"TruckDelay":0,"AirPollutionEm":512968.3316,"FuelUse":22967320.2328,"VehicleCost":4.801,"VehicleCostLow":28.9933},
  {"Scenario":"B1C3D2E2F2G3I2L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.531,"WalkTravelPerCapita":0.4197,"TruckDelay":0,"AirPollutionEm":470624.6627,"FuelUse":21184809.3731,"VehicleCost":4.647,"VehicleCostLow":26.2978},
  {"Scenario":"B1C3D2E2F2G3I3L1P1T1V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"3","I":"3","L":"1","P":"1","T":"1","V":"2","GHGReduction":0,"DVMTPerCapita":15.2246,"WalkTravelPerCapita":0.3832,"TruckDelay":0,"AirPollutionEm":554470.3325,"FuelUse":24622753.174,"VehicleCost":4.7187,"VehicleCostLow":28.67},
  {"Scenario":"B1C3D2E2F2G3I3L2P1T2V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"3","I":"3","L":"2","P":"1","T":"2","V":"2","GHGReduction":0,"DVMTPerCapita":13.7671,"WalkTravelPerCapita":0.3957,"TruckDelay":0,"AirPollutionEm":517536.7864,"FuelUse":23156161.685,"VehicleCost":4.4887,"VehicleCostLow":29.3649},
  {"Scenario":"B1C3D2E2F2G3I3L2P2T3V2","B":"1","C":"3","D":"2","E":"2","F":"2","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6608,"WalkTravelPerCapita":0.4224,"TruckDelay":0,"AirPollutionEm":475447.3432,"FuelUse":21386272.6775,"VehicleCost":4.3341,"VehicleCostLow":26.4386},
  {"Scenario":"B2C1D1E1F1G1I1L2P2T3V1","B":"2","C":"1","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.7276,"WalkTravelPerCapita":0.3844,"TruckDelay":0,"AirPollutionEm":704316.1768,"FuelUse":31048347.6897,"VehicleCost":4.2166,"VehicleCostLow":22.318},
  {"Scenario":"B2C1D1E1F1G1I1L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8863,"WalkTravelPerCapita":0.3834,"TruckDelay":0,"AirPollutionEm":658927.6513,"FuelUse":29146335.493,"VehicleCost":4.5676,"VehicleCostLow":24.095},
  {"Scenario":"B2C1D1E1F1G1I2L2P2T3V1","B":"2","C":"1","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.6544,"WalkTravelPerCapita":0.3903,"TruckDelay":0,"AirPollutionEm":698795.6412,"FuelUse":30819305.1459,"VehicleCost":3.8953,"VehicleCostLow":22.5141},
  {"Scenario":"B2C1D1E1F1G1I2L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8103,"WalkTravelPerCapita":0.3894,"TruckDelay":0,"AirPollutionEm":653692.1361,"FuelUse":28928124.0594,"VehicleCost":4.2158,"VehicleCostLow":24.3861},
  {"Scenario":"B2C1D1E1F1G1I3L2P2T3V1","B":"2","C":"1","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.6817,"WalkTravelPerCapita":0.3938,"TruckDelay":0,"AirPollutionEm":698415.421,"FuelUse":30803423.1389,"VehicleCost":3.6443,"VehicleCostLow":22.7597},
  {"Scenario":"B2C1D1E1F1G1I3L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8303,"WalkTravelPerCapita":0.3929,"TruckDelay":0,"AirPollutionEm":654226.4094,"FuelUse":28951218.9109,"VehicleCost":3.931,"VehicleCostLow":24.5084},
  {"Scenario":"B2C1D1E1F1G2I1L2P2T3V1","B":"2","C":"1","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.0659,"WalkTravelPerCapita":0.3956,"TruckDelay":0,"AirPollutionEm":624313.5326,"FuelUse":27726451.2539,"VehicleCost":4.2181,"VehicleCostLow":22.32},
  {"Scenario":"B2C1D1E1F1G2I1L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.371,"WalkTravelPerCapita":0.3935,"TruckDelay":0,"AirPollutionEm":593307.3824,"FuelUse":26423592.1597,"VehicleCost":4.5691,"VehicleCostLow":24.0971},
  {"Scenario":"B2C1D1E1F1G2I2L2P2T3V1","B":"2","C":"1","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.0367,"WalkTravelPerCapita":0.4012,"TruckDelay":0,"AirPollutionEm":620871.3752,"FuelUse":27583403.9251,"VehicleCost":3.8967,"VehicleCostLow":22.516},
  {"Scenario":"B2C1D1E1F1G2I2L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.3418,"WalkTravelPerCapita":0.3993,"TruckDelay":0,"AirPollutionEm":590200.9416,"FuelUse":26293328.3666,"VehicleCost":4.2172,"VehicleCostLow":24.3881},
  {"Scenario":"B2C1D1E1F1G2I3L2P2T3V1","B":"2","C":"1","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.1259,"WalkTravelPerCapita":0.4044,"TruckDelay":0,"AirPollutionEm":623514.5073,"FuelUse":27693282.629,"VehicleCost":3.6456,"VehicleCostLow":22.7617},
  {"Scenario":"B2C1D1E1F1G2I3L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4217,"WalkTravelPerCapita":0.4024,"TruckDelay":0,"AirPollutionEm":593346.9766,"FuelUse":26424590.7153,"VehicleCost":3.9323,"VehicleCostLow":24.5105},
  {"Scenario":"B2C1D1E1F1G3I1L2P2T3V1","B":"2","C":"1","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.2356,"WalkTravelPerCapita":0.4169,"TruckDelay":0,"AirPollutionEm":494557.629,"FuelUse":22340704.8807,"VehicleCost":4.2195,"VehicleCostLow":22.321},
  {"Scenario":"B2C1D1E1F1G3I1L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6633,"WalkTravelPerCapita":0.4133,"TruckDelay":0,"AirPollutionEm":479745.3798,"FuelUse":21712915.6158,"VehicleCost":4.5706,"VehicleCostLow":24.0981},
  {"Scenario":"B2C1D1E1F1G3I2L2P2T3V1","B":"2","C":"1","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.2789,"WalkTravelPerCapita":0.4219,"TruckDelay":0,"AirPollutionEm":494423.6172,"FuelUse":22334395.9943,"VehicleCost":3.898,"VehicleCostLow":22.5168},
  {"Scenario":"B2C1D1E1F1G3I2L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7014,"WalkTravelPerCapita":0.4185,"TruckDelay":0,"AirPollutionEm":479562.4189,"FuelUse":21703434.7021,"VehicleCost":4.2186,"VehicleCostLow":24.3891},
  {"Scenario":"B2C1D1E1F1G3I3L2P2T3V1","B":"2","C":"1","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.4234,"WalkTravelPerCapita":0.4246,"TruckDelay":0,"AirPollutionEm":499585.1063,"FuelUse":22548775.1215,"VehicleCost":3.6469,"VehicleCostLow":22.7627},
  {"Scenario":"B2C1D1E1F1G3I3L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.8299,"WalkTravelPerCapita":0.4212,"TruckDelay":0,"AirPollutionEm":484632.8306,"FuelUse":21914341.8175,"VehicleCost":3.9337,"VehicleCostLow":24.5116},
  {"Scenario":"B2C1D1E1F2G1I1L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"2","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8882,"WalkTravelPerCapita":0.3833,"TruckDelay":0,"AirPollutionEm":656994.0458,"FuelUse":28920665.9472,"VehicleCost":4.5676,"VehicleCostLow":24.095},
  {"Scenario":"B2C1D1E1F2G1I2L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"2","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8122,"WalkTravelPerCapita":0.3893,"TruckDelay":0,"AirPollutionEm":651462.243,"FuelUse":28690172.2856,"VehicleCost":4.2158,"VehicleCostLow":24.3861},
  {"Scenario":"B2C1D1E1F2G1I3L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"2","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8323,"WalkTravelPerCapita":0.3928,"TruckDelay":0,"AirPollutionEm":651811.1938,"FuelUse":28705687.7834,"VehicleCost":3.931,"VehicleCostLow":24.5084},
  {"Scenario":"B2C1D1E1F2G2I1L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"2","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.3743,"WalkTravelPerCapita":0.3934,"TruckDelay":0,"AirPollutionEm":591499.0485,"FuelUse":26202062.2655,"VehicleCost":4.5691,"VehicleCostLow":24.0971},
  {"Scenario":"B2C1D1E1F2G2I2L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"2","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.3452,"WalkTravelPerCapita":0.3992,"TruckDelay":0,"AirPollutionEm":588103.2136,"FuelUse":26059845.453,"VehicleCost":4.2172,"VehicleCostLow":24.3881},
  {"Scenario":"B2C1D1E1F2G2I3L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"2","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4252,"WalkTravelPerCapita":0.4023,"TruckDelay":0,"AirPollutionEm":591064.2537,"FuelUse":26183603.1102,"VehicleCost":3.9323,"VehicleCostLow":24.5105},
  {"Scenario":"B2C1D1E1F2G3I1L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"2","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6684,"WalkTravelPerCapita":0.4131,"TruckDelay":0,"AirPollutionEm":478116.741,"FuelUse":21496504.6218,"VehicleCost":4.5706,"VehicleCostLow":24.0981},
  {"Scenario":"B2C1D1E1F2G3I2L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"2","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.707,"WalkTravelPerCapita":0.4183,"TruckDelay":0,"AirPollutionEm":477659.7643,"FuelUse":21475776.7389,"VehicleCost":4.2186,"VehicleCostLow":24.3891},
  {"Scenario":"B2C1D1E1F2G3I3L2P2T3V2","B":"2","C":"1","D":"1","E":"1","F":"2","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.8356,"WalkTravelPerCapita":0.421,"TruckDelay":0,"AirPollutionEm":482547.2575,"FuelUse":21679330.9846,"VehicleCost":3.9337,"VehicleCostLow":24.5116},
  {"Scenario":"B2C1D2E2F1G1I1L2P2T3V1","B":"2","C":"1","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.6261,"WalkTravelPerCapita":0.3849,"TruckDelay":0,"AirPollutionEm":699887.1815,"FuelUse":30864942.8884,"VehicleCost":4.2165,"VehicleCostLow":22.3179},
  {"Scenario":"B2C1D2E2F1G1I1L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.7815,"WalkTravelPerCapita":0.3839,"TruckDelay":0,"AirPollutionEm":654711.3191,"FuelUse":28972130.5457,"VehicleCost":4.5676,"VehicleCostLow":24.0948},
  {"Scenario":"B2C1D2E2F1G1I2L2P2T3V1","B":"2","C":"1","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.573,"WalkTravelPerCapita":0.3907,"TruckDelay":0,"AirPollutionEm":695174.7884,"FuelUse":30668863.6989,"VehicleCost":3.8952,"VehicleCostLow":22.5141},
  {"Scenario":"B2C1D2E2F1G1I2L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.7255,"WalkTravelPerCapita":0.3898,"TruckDelay":0,"AirPollutionEm":650203.4346,"FuelUse":28783803.3586,"VehicleCost":4.2158,"VehicleCostLow":24.3861},
  {"Scenario":"B2C1D2E2F1G1I3L2P2T3V1","B":"2","C":"1","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.5781,"WalkTravelPerCapita":0.3943,"TruckDelay":0,"AirPollutionEm":693858.4219,"FuelUse":30614128.6726,"VehicleCost":3.6442,"VehicleCostLow":22.7596},
  {"Scenario":"B2C1D2E2F1G1I3L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.7245,"WalkTravelPerCapita":0.3934,"TruckDelay":0,"AirPollutionEm":649964.5158,"FuelUse":28775044.2127,"VehicleCost":3.9309,"VehicleCostLow":24.5083},
  {"Scenario":"B2C1D2E2F1G2I1L2P2T3V1","B":"2","C":"1","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":14.9918,"WalkTravelPerCapita":0.396,"TruckDelay":0,"AirPollutionEm":621173.6284,"FuelUse":27596471.8724,"VehicleCost":4.218,"VehicleCostLow":22.3199},
  {"Scenario":"B2C1D2E2F1G2I1L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2945,"WalkTravelPerCapita":0.3939,"TruckDelay":0,"AirPollutionEm":590319.0896,"FuelUse":26300196.6979,"VehicleCost":4.5691,"VehicleCostLow":24.097},
  {"Scenario":"B2C1D2E2F1G2I2L2P2T3V1","B":"2","C":"1","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":14.9801,"WalkTravelPerCapita":0.4015,"TruckDelay":0,"AirPollutionEm":618427.0197,"FuelUse":27481930.5726,"VehicleCost":3.8966,"VehicleCostLow":22.516},
  {"Scenario":"B2C1D2E2F1G2I2L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2792,"WalkTravelPerCapita":0.3996,"TruckDelay":0,"AirPollutionEm":587654.3723,"FuelUse":26188052.695,"VehicleCost":4.2172,"VehicleCostLow":24.3881},
  {"Scenario":"B2C1D2E2F1G2I3L2P2T3V1","B":"2","C":"1","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.0494,"WalkTravelPerCapita":0.4048,"TruckDelay":0,"AirPollutionEm":620247.0304,"FuelUse":27557456.2588,"VehicleCost":3.6456,"VehicleCostLow":22.7616},
  {"Scenario":"B2C1D2E2F1G2I3L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.3408,"WalkTravelPerCapita":0.4029,"TruckDelay":0,"AirPollutionEm":590177.3996,"FuelUse":26293839.8416,"VehicleCost":3.9323,"VehicleCostLow":24.5104},
  {"Scenario":"B2C1D2E2F1G3I1L2P2T3V1","B":"2","C":"1","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.1942,"WalkTravelPerCapita":0.4171,"TruckDelay":0,"AirPollutionEm":492866.7106,"FuelUse":22270498.7772,"VehicleCost":4.2194,"VehicleCostLow":22.321},
  {"Scenario":"B2C1D2E2F1G3I1L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6179,"WalkTravelPerCapita":0.4135,"TruckDelay":0,"AirPollutionEm":478056.7718,"FuelUse":21643220.5232,"VehicleCost":4.5706,"VehicleCostLow":24.0981},
  {"Scenario":"B2C1D2E2F1G3I2L2P2T3V1","B":"2","C":"1","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.2488,"WalkTravelPerCapita":0.4221,"TruckDelay":0,"AirPollutionEm":493192.4288,"FuelUse":22283363.632,"VehicleCost":3.898,"VehicleCostLow":22.5168},
  {"Scenario":"B2C1D2E2F1G3I2L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6676,"WalkTravelPerCapita":0.4187,"TruckDelay":0,"AirPollutionEm":478196.9506,"FuelUse":21647051.2126,"VehicleCost":4.2186,"VehicleCostLow":24.3891},
  {"Scenario":"B2C1D2E2F1G3I3L2P2T3V1","B":"2","C":"1","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.3787,"WalkTravelPerCapita":0.4248,"TruckDelay":0,"AirPollutionEm":497759.447,"FuelUse":22472721.346,"VehicleCost":3.6469,"VehicleCostLow":22.7626},
  {"Scenario":"B2C1D2E2F1G3I3L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7807,"WalkTravelPerCapita":0.4215,"TruckDelay":0,"AirPollutionEm":482799.8623,"FuelUse":21839001.0124,"VehicleCost":3.9336,"VehicleCostLow":24.5115},
  {"Scenario":"B2C1D2E2F2G1I1L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"2","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.7833,"WalkTravelPerCapita":0.3838,"TruckDelay":0,"AirPollutionEm":652782.4613,"FuelUse":28746568.0961,"VehicleCost":4.5676,"VehicleCostLow":24.0948},
  {"Scenario":"B2C1D2E2F2G1I2L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"2","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.7275,"WalkTravelPerCapita":0.3897,"TruckDelay":0,"AirPollutionEm":647979.502,"FuelUse":28546021.8471,"VehicleCost":4.2158,"VehicleCostLow":24.3861},
  {"Scenario":"B2C1D2E2F2G1I3L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"2","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.7264,"WalkTravelPerCapita":0.3934,"TruckDelay":0,"AirPollutionEm":647557.0507,"FuelUse":28529745.0355,"VehicleCost":3.9309,"VehicleCostLow":24.5083},
  {"Scenario":"B2C1D2E2F2G2I1L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"2","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2978,"WalkTravelPerCapita":0.3938,"TruckDelay":0,"AirPollutionEm":588514.7313,"FuelUse":26078752.1411,"VehicleCost":4.5691,"VehicleCostLow":24.097},
  {"Scenario":"B2C1D2E2F2G2I2L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"2","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2827,"WalkTravelPerCapita":0.3995,"TruckDelay":0,"AirPollutionEm":585561.7512,"FuelUse":25954713.1937,"VehicleCost":4.2172,"VehicleCostLow":24.3881},
  {"Scenario":"B2C1D2E2F2G2I3L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"2","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.3443,"WalkTravelPerCapita":0.4027,"TruckDelay":0,"AirPollutionEm":587901.0702,"FuelUse":26053036.5087,"VehicleCost":3.9323,"VehicleCostLow":24.5104},
  {"Scenario":"B2C1D2E2F2G3I1L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"2","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.623,"WalkTravelPerCapita":0.4133,"TruckDelay":0,"AirPollutionEm":476431.4371,"FuelUse":21426890.4551,"VehicleCost":4.5706,"VehicleCostLow":24.0981},
  {"Scenario":"B2C1D2E2F2G3I2L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"2","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6732,"WalkTravelPerCapita":0.4185,"TruckDelay":0,"AirPollutionEm":476298.2525,"FuelUse":21419511.056,"VehicleCost":4.2186,"VehicleCostLow":24.3891},
  {"Scenario":"B2C1D2E2F2G3I3L2P2T3V2","B":"2","C":"1","D":"2","E":"2","F":"2","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7863,"WalkTravelPerCapita":0.4213,"TruckDelay":0,"AirPollutionEm":480719.352,"FuelUse":21604139.8554,"VehicleCost":3.9336,"VehicleCostLow":24.5115},
  {"Scenario":"B2C2D1E1F1G1I1L2P2T3V1","B":"2","C":"2","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.7276,"WalkTravelPerCapita":0.3844,"TruckDelay":0,"AirPollutionEm":704316.3083,"FuelUse":31048353.1379,"VehicleCost":4.284,"VehicleCostLow":22.7906},
  {"Scenario":"B2C2D1E1F1G1I1L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8854,"WalkTravelPerCapita":0.3834,"TruckDelay":0,"AirPollutionEm":658874.1378,"FuelUse":29144184.8887,"VehicleCost":4.6352,"VehicleCostLow":24.5733},
  {"Scenario":"B2C2D1E1F1G1I2L2P2T3V1","B":"2","C":"2","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.6544,"WalkTravelPerCapita":0.3903,"TruckDelay":0,"AirPollutionEm":698795.7173,"FuelUse":30819308.2974,"VehicleCost":3.9572,"VehicleCostLow":22.9893},
  {"Scenario":"B2C2D1E1F1G1I2L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8108,"WalkTravelPerCapita":0.3894,"TruckDelay":0,"AirPollutionEm":653916.2046,"FuelUse":28937421.5488,"VehicleCost":4.2778,"VehicleCostLow":24.8644},
  {"Scenario":"B2C2D1E1F1G1I3L2P2T3V1","B":"2","C":"2","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.68,"WalkTravelPerCapita":0.3938,"TruckDelay":0,"AirPollutionEm":698307.8579,"FuelUse":30798276.0129,"VehicleCost":3.7018,"VehicleCostLow":23.234},
  {"Scenario":"B2C2D1E1F1G1I3L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8303,"WalkTravelPerCapita":0.3929,"TruckDelay":0,"AirPollutionEm":654226.533,"FuelUse":28951224.0385,"VehicleCost":3.9886,"VehicleCostLow":24.9891},
  {"Scenario":"B2C2D1E1F1G2I1L2P2T3V1","B":"2","C":"2","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.0659,"WalkTravelPerCapita":0.3956,"TruckDelay":0,"AirPollutionEm":624313.66,"FuelUse":27726456.5335,"VehicleCost":4.2855,"VehicleCostLow":22.7926},
  {"Scenario":"B2C2D1E1F1G2I1L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.3686,"WalkTravelPerCapita":0.3936,"TruckDelay":0,"AirPollutionEm":593146.3517,"FuelUse":26416871.9241,"VehicleCost":4.6366,"VehicleCostLow":24.5754},
  {"Scenario":"B2C2D1E1F1G2I2L2P2T3V1","B":"2","C":"2","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.0367,"WalkTravelPerCapita":0.4012,"TruckDelay":0,"AirPollutionEm":620871.4494,"FuelUse":27583406.9978,"VehicleCost":3.9586,"VehicleCostLow":22.9912},
  {"Scenario":"B2C2D1E1F1G2I2L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.3426,"WalkTravelPerCapita":0.3992,"TruckDelay":0,"AirPollutionEm":590463.3551,"FuelUse":26304457.4425,"VehicleCost":4.2792,"VehicleCostLow":24.8663},
  {"Scenario":"B2C2D1E1F1G2I3L2P2T3V1","B":"2","C":"2","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.123,"WalkTravelPerCapita":0.4044,"TruckDelay":0,"AirPollutionEm":623295.0919,"FuelUse":27683384.8621,"VehicleCost":3.7032,"VehicleCostLow":23.236},
  {"Scenario":"B2C2D1E1F1G2I3L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4217,"WalkTravelPerCapita":0.4024,"TruckDelay":0,"AirPollutionEm":593347.0912,"FuelUse":26424595.4713,"VehicleCost":3.9899,"VehicleCostLow":24.9912},
  {"Scenario":"B2C2D1E1F1G3I1L2P2T3V1","B":"2","C":"2","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.2356,"WalkTravelPerCapita":0.4169,"TruckDelay":0,"AirPollutionEm":494557.7481,"FuelUse":22340709.8187,"VehicleCost":4.287,"VehicleCostLow":22.7936},
  {"Scenario":"B2C2D1E1F1G3I1L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6641,"WalkTravelPerCapita":0.4133,"TruckDelay":0,"AirPollutionEm":479693.2512,"FuelUse":21710644.4066,"VehicleCost":4.6381,"VehicleCostLow":24.5765},
  {"Scenario":"B2C2D1E1F1G3I2L2P2T3V1","B":"2","C":"2","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.2789,"WalkTravelPerCapita":0.4219,"TruckDelay":0,"AirPollutionEm":494423.6871,"FuelUse":22334398.8907,"VehicleCost":3.9599,"VehicleCostLow":22.992},
  {"Scenario":"B2C2D1E1F1G3I2L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6998,"WalkTravelPerCapita":0.4184,"TruckDelay":0,"AirPollutionEm":479721.172,"FuelUse":21710562.2595,"VehicleCost":4.2806,"VehicleCostLow":24.8673},
  {"Scenario":"B2C2D1E1F1G3I3L2P2T3V1","B":"2","C":"2","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.4227,"WalkTravelPerCapita":0.4246,"TruckDelay":0,"AirPollutionEm":499415.3806,"FuelUse":22541007.6627,"VehicleCost":3.7045,"VehicleCostLow":23.237},
  {"Scenario":"B2C2D1E1F1G3I3L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.83,"WalkTravelPerCapita":0.4212,"TruckDelay":0,"AirPollutionEm":484632.9332,"FuelUse":21914346.0759,"VehicleCost":3.9913,"VehicleCostLow":24.9923},
  {"Scenario":"B2C2D1E1F2G1I1L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"2","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8872,"WalkTravelPerCapita":0.3833,"TruckDelay":0,"AirPollutionEm":656940.5322,"FuelUse":28918514.9058,"VehicleCost":4.6352,"VehicleCostLow":24.5733},
  {"Scenario":"B2C2D1E1F2G1I2L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"2","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8127,"WalkTravelPerCapita":0.3893,"TruckDelay":0,"AirPollutionEm":651686.212,"FuelUse":28699466.3001,"VehicleCost":4.2778,"VehicleCostLow":24.8644},
  {"Scenario":"B2C2D1E1F2G1I3L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"2","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.8323,"WalkTravelPerCapita":0.3928,"TruckDelay":0,"AirPollutionEm":651811.3117,"FuelUse":28705692.6761,"VehicleCost":3.9886,"VehicleCostLow":24.9891},
  {"Scenario":"B2C2D1E1F2G2I1L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"2","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.3719,"WalkTravelPerCapita":0.3935,"TruckDelay":0,"AirPollutionEm":591338.027,"FuelUse":26195341.0508,"VehicleCost":4.6366,"VehicleCostLow":24.5754},
  {"Scenario":"B2C2D1E1F2G2I2L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"2","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.3461,"WalkTravelPerCapita":0.3991,"TruckDelay":0,"AirPollutionEm":588365.7607,"FuelUse":26070981.5873,"VehicleCost":4.2792,"VehicleCostLow":24.8663},
  {"Scenario":"B2C2D1E1F2G2I3L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"2","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.4253,"WalkTravelPerCapita":0.4023,"TruckDelay":0,"AirPollutionEm":591064.3632,"FuelUse":26183607.6549,"VehicleCost":3.9899,"VehicleCostLow":24.9912},
  {"Scenario":"B2C2D1E1F2G3I1L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"2","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6693,"WalkTravelPerCapita":0.4131,"TruckDelay":0,"AirPollutionEm":478064.7387,"FuelUse":21494239.5872,"VehicleCost":4.6381,"VehicleCostLow":24.5765},
  {"Scenario":"B2C2D1E1F2G3I2L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"2","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7054,"WalkTravelPerCapita":0.4182,"TruckDelay":0,"AirPollutionEm":477818.6149,"FuelUse":21482907.9132,"VehicleCost":4.2806,"VehicleCostLow":24.8673},
  {"Scenario":"B2C2D1E1F2G3I3L2P2T3V2","B":"2","C":"2","D":"1","E":"1","F":"2","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.8357,"WalkTravelPerCapita":0.421,"TruckDelay":0,"AirPollutionEm":482547.3558,"FuelUse":21679335.0661,"VehicleCost":3.9913,"VehicleCostLow":24.9923},
  {"Scenario":"B2C2D2E2F1G1I1L2P2T3V1","B":"2","C":"2","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.6261,"WalkTravelPerCapita":0.3849,"TruckDelay":0,"AirPollutionEm":699887.3129,"FuelUse":30864948.3359,"VehicleCost":4.284,"VehicleCostLow":22.7905},
  {"Scenario":"B2C2D2E2F1G1I1L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.78,"WalkTravelPerCapita":0.3839,"TruckDelay":0,"AirPollutionEm":654583.4286,"FuelUse":28966770.1488,"VehicleCost":4.6351,"VehicleCostLow":24.5732},
  {"Scenario":"B2C2D2E2F1G1I2L2P2T3V1","B":"2","C":"2","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.573,"WalkTravelPerCapita":0.3907,"TruckDelay":0,"AirPollutionEm":695174.8644,"FuelUse":30668866.8486,"VehicleCost":3.9571,"VehicleCostLow":22.9893},
  {"Scenario":"B2C2D2E2F1G1I2L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.7256,"WalkTravelPerCapita":0.3898,"TruckDelay":0,"AirPollutionEm":650450.9626,"FuelUse":28794023.793,"VehicleCost":4.2778,"VehicleCostLow":24.8643},
  {"Scenario":"B2C2D2E2F1G1I3L2P2T3V1","B":"2","C":"2","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.5764,"WalkTravelPerCapita":0.3943,"TruckDelay":0,"AirPollutionEm":693721.8826,"FuelUse":30607914.8081,"VehicleCost":3.7018,"VehicleCostLow":23.2339},
  {"Scenario":"B2C2D2E2F1G1I3L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.7245,"WalkTravelPerCapita":0.3934,"TruckDelay":0,"AirPollutionEm":649964.6394,"FuelUse":28775049.3397,"VehicleCost":3.9886,"VehicleCostLow":24.989},
  {"Scenario":"B2C2D2E2F1G2I1L2P2T3V1","B":"2","C":"2","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":14.9918,"WalkTravelPerCapita":0.396,"TruckDelay":0,"AirPollutionEm":621173.7559,"FuelUse":27596477.1534,"VehicleCost":4.2855,"VehicleCostLow":22.7925},
  {"Scenario":"B2C2D2E2F1G2I1L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2921,"WalkTravelPerCapita":0.394,"TruckDelay":0,"AirPollutionEm":590106.1857,"FuelUse":26291169.1844,"VehicleCost":4.6366,"VehicleCostLow":24.5753},
  {"Scenario":"B2C2D2E2F1G2I2L2P2T3V1","B":"2","C":"2","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":14.9801,"WalkTravelPerCapita":0.4015,"TruckDelay":0,"AirPollutionEm":618427.0938,"FuelUse":27481933.6432,"VehicleCost":3.9585,"VehicleCostLow":22.9911},
  {"Scenario":"B2C2D2E2F1G2I2L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2796,"WalkTravelPerCapita":0.3996,"TruckDelay":0,"AirPollutionEm":587922.6919,"FuelUse":26199248.5201,"VehicleCost":4.2792,"VehicleCostLow":24.8663},
  {"Scenario":"B2C2D2E2F1G2I3L2P2T3V1","B":"2","C":"2","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":15.0466,"WalkTravelPerCapita":0.4048,"TruckDelay":0,"AirPollutionEm":619996.1498,"FuelUse":27546306.6954,"VehicleCost":3.7031,"VehicleCostLow":23.2359},
  {"Scenario":"B2C2D2E2F1G2I3L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.3408,"WalkTravelPerCapita":0.4029,"TruckDelay":0,"AirPollutionEm":590177.5142,"FuelUse":26293844.5986,"VehicleCost":3.9899,"VehicleCostLow":24.9911},
  {"Scenario":"B2C2D2E2F1G3I1L2P2T3V1","B":"2","C":"2","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.1942,"WalkTravelPerCapita":0.4171,"TruckDelay":0,"AirPollutionEm":492866.8297,"FuelUse":22270503.7128,"VehicleCost":4.2869,"VehicleCostLow":22.7936},
  {"Scenario":"B2C2D2E2F1G3I1L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6185,"WalkTravelPerCapita":0.4135,"TruckDelay":0,"AirPollutionEm":477942.7282,"FuelUse":21638238.9648,"VehicleCost":4.6381,"VehicleCostLow":24.5764},
  {"Scenario":"B2C2D2E2F1G3I2L2P2T3V1","B":"2","C":"2","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.2488,"WalkTravelPerCapita":0.4221,"TruckDelay":0,"AirPollutionEm":493192.4987,"FuelUse":22283366.5276,"VehicleCost":3.9599,"VehicleCostLow":22.992},
  {"Scenario":"B2C2D2E2F1G3I2L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6649,"WalkTravelPerCapita":0.4186,"TruckDelay":0,"AirPollutionEm":478309.9958,"FuelUse":21652041.8962,"VehicleCost":4.2806,"VehicleCostLow":24.8673},
  {"Scenario":"B2C2D2E2F1G3I3L2P2T3V1","B":"2","C":"2","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.3778,"WalkTravelPerCapita":0.4248,"TruckDelay":0,"AirPollutionEm":497549.6363,"FuelUse":22463342.0188,"VehicleCost":3.7044,"VehicleCostLow":23.2369},
  {"Scenario":"B2C2D2E2F1G3I3L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7807,"WalkTravelPerCapita":0.4215,"TruckDelay":0,"AirPollutionEm":482799.965,"FuelUse":21839005.2715,"VehicleCost":3.9913,"VehicleCostLow":24.9922},
  {"Scenario":"B2C2D2E2F2G1I1L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"2","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.7818,"WalkTravelPerCapita":0.3838,"TruckDelay":0,"AirPollutionEm":652654.6017,"FuelUse":28741208.2463,"VehicleCost":4.6351,"VehicleCostLow":24.5732},
  {"Scenario":"B2C2D2E2F2G1I2L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"2","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.7276,"WalkTravelPerCapita":0.3897,"TruckDelay":0,"AirPollutionEm":648226.9001,"FuelUse":28556237.0983,"VehicleCost":4.2778,"VehicleCostLow":24.8643},
  {"Scenario":"B2C2D2E2F2G1I3L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"2","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.7264,"WalkTravelPerCapita":0.3934,"TruckDelay":0,"AirPollutionEm":647557.1685,"FuelUse":28529749.9276,"VehicleCost":3.9886,"VehicleCostLow":24.989},
  {"Scenario":"B2C2D2E2F2G2I1L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"2","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2953,"WalkTravelPerCapita":0.3939,"TruckDelay":0,"AirPollutionEm":588301.932,"FuelUse":26069727.4418,"VehicleCost":4.6366,"VehicleCostLow":24.5753},
  {"Scenario":"B2C2D2E2F2G2I2L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"2","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2831,"WalkTravelPerCapita":0.3994,"TruckDelay":0,"AirPollutionEm":585830.0794,"FuelUse":25965910.0519,"VehicleCost":4.2792,"VehicleCostLow":24.8663},
  {"Scenario":"B2C2D2E2F2G2I3L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"2","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.3443,"WalkTravelPerCapita":0.4027,"TruckDelay":0,"AirPollutionEm":587901.1798,"FuelUse":26053041.0545,"VehicleCost":3.9899,"VehicleCostLow":24.9911},
  {"Scenario":"B2C2D2E2F2G3I1L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"2","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6236,"WalkTravelPerCapita":0.4134,"TruckDelay":0,"AirPollutionEm":476317.5007,"FuelUse":21421913.9883,"VehicleCost":4.6381,"VehicleCostLow":24.5764},
  {"Scenario":"B2C2D2E2F2G3I2L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"2","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6704,"WalkTravelPerCapita":0.4184,"TruckDelay":0,"AirPollutionEm":476411.3321,"FuelUse":21424501.5436,"VehicleCost":4.2806,"VehicleCostLow":24.8673},
  {"Scenario":"B2C2D2E2F2G3I3L2P2T3V2","B":"2","C":"2","D":"2","E":"2","F":"2","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.7863,"WalkTravelPerCapita":0.4213,"TruckDelay":0,"AirPollutionEm":480719.4504,"FuelUse":21604143.9356,"VehicleCost":3.9913,"VehicleCostLow":24.9922},
  {"Scenario":"B2C3D1E1F1G1I1L2P2T3V1","B":"2","C":"3","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.5257,"WalkTravelPerCapita":0.3857,"TruckDelay":0,"AirPollutionEm":695294.9375,"FuelUse":30674273.6125,"VehicleCost":4.6237,"VehicleCostLow":23.9192},
  {"Scenario":"B2C3D1E1F1G1I1L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.6943,"WalkTravelPerCapita":0.3847,"TruckDelay":0,"AirPollutionEm":651118.6257,"FuelUse":28822005.205,"VehicleCost":5.0312,"VehicleCostLow":25.9679},
  {"Scenario":"B2C3D1E1F1G1I2L2P2T3V1","B":"2","C":"3","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.4557,"WalkTravelPerCapita":0.3917,"TruckDelay":0,"AirPollutionEm":689667.2921,"FuelUse":30440047.4946,"VehicleCost":4.2727,"VehicleCostLow":24.1244},
  {"Scenario":"B2C3D1E1F1G1I2L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.6208,"WalkTravelPerCapita":0.3906,"TruckDelay":0,"AirPollutionEm":646201.9037,"FuelUse":28618639.9327,"VehicleCost":4.6443,"VehicleCostLow":26.2953},
  {"Scenario":"B2C3D1E1F1G1I3L2P2T3V1","B":"2","C":"3","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.4934,"WalkTravelPerCapita":0.3951,"TruckDelay":0,"AirPollutionEm":689775.6124,"FuelUse":30444253.3361,"VehicleCost":3.9988,"VehicleCostLow":24.4096},
  {"Scenario":"B2C3D1E1F1G1I3L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.6505,"WalkTravelPerCapita":0.3941,"TruckDelay":0,"AirPollutionEm":646711.7847,"FuelUse":28640101.0595,"VehicleCost":4.3316,"VehicleCostLow":26.4358},
  {"Scenario":"B2C3D1E1F1G2I1L2P2T3V1","B":"2","C":"3","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":14.8331,"WalkTravelPerCapita":0.3972,"TruckDelay":0,"AirPollutionEm":614193.7989,"FuelUse":27306766.045,"VehicleCost":4.6251,"VehicleCostLow":23.921},
  {"Scenario":"B2C3D1E1F1G2I1L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.1418,"WalkTravelPerCapita":0.395,"TruckDelay":0,"AirPollutionEm":584103.7986,"FuelUse":26041136.6349,"VehicleCost":5.0326,"VehicleCostLow":25.9698},
  {"Scenario":"B2C3D1E1F1G2I2L2P2T3V1","B":"2","C":"3","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":14.811,"WalkTravelPerCapita":0.4028,"TruckDelay":0,"AirPollutionEm":610809.2182,"FuelUse":27165672.5642,"VehicleCost":4.274,"VehicleCostLow":24.1261},
  {"Scenario":"B2C3D1E1F1G2I2L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.1177,"WalkTravelPerCapita":0.4007,"TruckDelay":0,"AirPollutionEm":581384.3917,"FuelUse":25928953.6216,"VehicleCost":4.6457,"VehicleCostLow":26.297},
  {"Scenario":"B2C3D1E1F1G2I3L2P2T3V1","B":"2","C":"3","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":14.9064,"WalkTravelPerCapita":0.4059,"TruckDelay":0,"AirPollutionEm":613728.8689,"FuelUse":27286642.8158,"VehicleCost":4.0001,"VehicleCostLow":24.4113},
  {"Scenario":"B2C3D1E1F1G2I3L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2088,"WalkTravelPerCapita":0.4039,"TruckDelay":0,"AirPollutionEm":584588.3648,"FuelUse":26062014.1982,"VehicleCost":4.3328,"VehicleCostLow":26.4377},
  {"Scenario":"B2C3D1E1F1G3I1L2P2T3V1","B":"2","C":"3","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.0319,"WalkTravelPerCapita":0.4185,"TruckDelay":0,"AirPollutionEm":486140.4351,"FuelUse":21991551.3456,"VehicleCost":4.6264,"VehicleCostLow":23.9218},
  {"Scenario":"B2C3D1E1F1G3I1L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.4551,"WalkTravelPerCapita":0.4149,"TruckDelay":0,"AirPollutionEm":471663.2114,"FuelUse":21376805.4251,"VehicleCost":5.034,"VehicleCostLow":25.9708},
  {"Scenario":"B2C3D1E1F1G3I2L2P2T3V1","B":"2","C":"3","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.0821,"WalkTravelPerCapita":0.4235,"TruckDelay":0,"AirPollutionEm":486084.1945,"FuelUse":21988401.9311,"VehicleCost":4.2753,"VehicleCostLow":24.1268},
  {"Scenario":"B2C3D1E1F1G3I2L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.491,"WalkTravelPerCapita":0.4201,"TruckDelay":0,"AirPollutionEm":471453.7641,"FuelUse":21368511.5739,"VehicleCost":4.647,"VehicleCostLow":26.2978},
  {"Scenario":"B2C3D1E1F1G3I3L2P2T3V1","B":"2","C":"3","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.2273,"WalkTravelPerCapita":0.4261,"TruckDelay":0,"AirPollutionEm":491303.3137,"FuelUse":22205180.7991,"VehicleCost":4.0014,"VehicleCostLow":24.4122},
  {"Scenario":"B2C3D1E1F1G3I3L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6321,"WalkTravelPerCapita":0.4227,"TruckDelay":0,"AirPollutionEm":476858.7949,"FuelUse":21592923.7796,"VehicleCost":4.3341,"VehicleCostLow":26.4386},
  {"Scenario":"B2C3D1E1F2G1I1L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"2","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.6962,"WalkTravelPerCapita":0.3846,"TruckDelay":0,"AirPollutionEm":649197.8733,"FuelUse":28596752.5936,"VehicleCost":5.0312,"VehicleCostLow":25.9679},
  {"Scenario":"B2C3D1E1F2G1I2L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"2","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.6228,"WalkTravelPerCapita":0.3906,"TruckDelay":0,"AirPollutionEm":643985.8563,"FuelUse":28381148.6062,"VehicleCost":4.6443,"VehicleCostLow":26.2953},
  {"Scenario":"B2C3D1E1F2G1I3L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"2","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.6525,"WalkTravelPerCapita":0.3941,"TruckDelay":0,"AirPollutionEm":644310.1518,"FuelUse":28395027.5713,"VehicleCost":4.3316,"VehicleCostLow":26.4358},
  {"Scenario":"B2C3D1E1F2G2I1L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"2","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.1451,"WalkTravelPerCapita":0.3949,"TruckDelay":0,"AirPollutionEm":582306.6457,"FuelUse":25819897.7605,"VehicleCost":5.0326,"VehicleCostLow":25.9698},
  {"Scenario":"B2C3D1E1F2G2I2L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"2","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.1212,"WalkTravelPerCapita":0.4006,"TruckDelay":0,"AirPollutionEm":579298.7892,"FuelUse":25695807.7953,"VehicleCost":4.6457,"VehicleCostLow":26.297},
  {"Scenario":"B2C3D1E1F2G2I3L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"2","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.2123,"WalkTravelPerCapita":0.4038,"TruckDelay":0,"AirPollutionEm":582317.9686,"FuelUse":25821382.7482,"VehicleCost":4.3328,"VehicleCostLow":26.4377},
  {"Scenario":"B2C3D1E1F2G3I1L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"2","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.4603,"WalkTravelPerCapita":0.4147,"TruckDelay":0,"AirPollutionEm":470043.3076,"FuelUse":21160581.2575,"VehicleCost":5.034,"VehicleCostLow":25.9708},
  {"Scenario":"B2C3D1E1F2G3I2L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"2","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.4966,"WalkTravelPerCapita":0.4199,"TruckDelay":0,"AirPollutionEm":469560.5018,"FuelUse":21141066.5163,"VehicleCost":4.647,"VehicleCostLow":26.2978},
  {"Scenario":"B2C3D1E1F2G3I3L2P2T3V2","B":"2","C":"3","D":"1","E":"1","F":"2","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.6378,"WalkTravelPerCapita":0.4225,"TruckDelay":0,"AirPollutionEm":474782.4739,"FuelUse":21358125.8431,"VehicleCost":4.3341,"VehicleCostLow":26.4386},
  {"Scenario":"B2C3D2E2F1G1I1L2P2T3V1","B":"2","C":"3","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.428,"WalkTravelPerCapita":0.3862,"TruckDelay":0,"AirPollutionEm":691041.3332,"FuelUse":30498075.6574,"VehicleCost":4.6236,"VehicleCostLow":23.919},
  {"Scenario":"B2C3D2E2F1G1I1L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"1","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.5938,"WalkTravelPerCapita":0.3851,"TruckDelay":0,"AirPollutionEm":646842.0469,"FuelUse":28644431.5855,"VehicleCost":5.0311,"VehicleCostLow":25.9678},
  {"Scenario":"B2C3D2E2F1G1I2L2P2T3V1","B":"2","C":"3","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.378,"WalkTravelPerCapita":0.392,"TruckDelay":0,"AirPollutionEm":686199.7244,"FuelUse":30296205.7262,"VehicleCost":4.2726,"VehicleCostLow":24.1244},
  {"Scenario":"B2C3D2E2F1G1I2L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"1","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.5399,"WalkTravelPerCapita":0.391,"TruckDelay":0,"AirPollutionEm":642830.9665,"FuelUse":28478582.6687,"VehicleCost":4.6443,"VehicleCostLow":26.2952},
  {"Scenario":"B2C3D2E2F1G1I3L2P2T3V1","B":"2","C":"3","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":16.3941,"WalkTravelPerCapita":0.3956,"TruckDelay":0,"AirPollutionEm":685430.7872,"FuelUse":30264204.5827,"VehicleCost":3.9988,"VehicleCostLow":24.4095},
  {"Scenario":"B2C3D2E2F1G1I3L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"1","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.5475,"WalkTravelPerCapita":0.3946,"TruckDelay":0,"AirPollutionEm":642593.6818,"FuelUse":28470555.3404,"VehicleCost":4.3315,"VehicleCostLow":26.4357},
  {"Scenario":"B2C3D2E2F1G2I1L2P2T3V1","B":"2","C":"3","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":14.7636,"WalkTravelPerCapita":0.3975,"TruckDelay":0,"AirPollutionEm":611265.4496,"FuelUse":27185454.0239,"VehicleCost":4.625,"VehicleCostLow":23.9209},
  {"Scenario":"B2C3D2E2F1G2I1L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"1","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.068,"WalkTravelPerCapita":0.3954,"TruckDelay":0,"AirPollutionEm":580990.2733,"FuelUse":25911969.3907,"VehicleCost":5.0326,"VehicleCostLow":25.9698},
  {"Scenario":"B2C3D2E2F1G2I2L2P2T3V1","B":"2","C":"3","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":14.7567,"WalkTravelPerCapita":0.4031,"TruckDelay":0,"AirPollutionEm":608465.2839,"FuelUse":27068496.5565,"VehicleCost":4.274,"VehicleCostLow":24.1261},
  {"Scenario":"B2C3D2E2F1G2I2L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"1","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.0609,"WalkTravelPerCapita":0.401,"TruckDelay":0,"AirPollutionEm":579061.5274,"FuelUse":25832454.6134,"VehicleCost":4.6456,"VehicleCostLow":26.297},
  {"Scenario":"B2C3D2E2F1G2I3L2P2T3V1","B":"2","C":"3","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":14.8329,"WalkTravelPerCapita":0.4063,"TruckDelay":0,"AirPollutionEm":610614.2311,"FuelUse":27157571.9789,"VehicleCost":4.0001,"VehicleCostLow":24.4113},
  {"Scenario":"B2C3D2E2F1G2I3L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"1","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.1294,"WalkTravelPerCapita":0.4043,"TruckDelay":0,"AirPollutionEm":581492.6001,"FuelUse":25934825.7892,"VehicleCost":4.3328,"VehicleCostLow":26.4376},
  {"Scenario":"B2C3D2E2F1G3I1L2P2T3V1","B":"2","C":"3","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":11.9933,"WalkTravelPerCapita":0.4187,"TruckDelay":0,"AirPollutionEm":484614.7066,"FuelUse":21928204.8265,"VehicleCost":4.6264,"VehicleCostLow":23.9218},
  {"Scenario":"B2C3D2E2F1G3I1L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"1","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.414,"WalkTravelPerCapita":0.4151,"TruckDelay":0,"AirPollutionEm":469936.2318,"FuelUse":21305262.237,"VehicleCost":5.0339,"VehicleCostLow":25.9707},
  {"Scenario":"B2C3D2E2F1G3I2L2P2T3V1","B":"2","C":"3","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.0533,"WalkTravelPerCapita":0.4237,"TruckDelay":0,"AirPollutionEm":484898.4585,"FuelUse":21939262.3041,"VehicleCost":4.2752,"VehicleCostLow":24.1268},
  {"Scenario":"B2C3D2E2F1G3I2L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"1","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.4594,"WalkTravelPerCapita":0.4202,"TruckDelay":0,"AirPollutionEm":470223.0509,"FuelUse":21317424.5018,"VehicleCost":4.6469,"VehicleCostLow":26.2978},
  {"Scenario":"B2C3D2E2F1G3I3L2P2T3V1","B":"2","C":"3","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"1","GHGReduction":0,"DVMTPerCapita":12.1845,"WalkTravelPerCapita":0.4264,"TruckDelay":0,"AirPollutionEm":489568.9169,"FuelUse":22133184.3083,"VehicleCost":4.0013,"VehicleCostLow":24.4121},
  {"Scenario":"B2C3D2E2F1G3I3L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"1","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.5849,"WalkTravelPerCapita":0.423,"TruckDelay":0,"AirPollutionEm":475061.8853,"FuelUse":21519244.9121,"VehicleCost":4.3341,"VehicleCostLow":26.4386},
  {"Scenario":"B2C3D2E2F2G1I1L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"2","G":"1","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.5957,"WalkTravelPerCapita":0.3851,"TruckDelay":0,"AirPollutionEm":644925.9923,"FuelUse":28419284.9242,"VehicleCost":5.0311,"VehicleCostLow":25.9678},
  {"Scenario":"B2C3D2E2F2G1I2L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"2","G":"1","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.5419,"WalkTravelPerCapita":0.391,"TruckDelay":0,"AirPollutionEm":640620.7698,"FuelUse":28241258.5338,"VehicleCost":4.6443,"VehicleCostLow":26.2952},
  {"Scenario":"B2C3D2E2F2G1I3L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"2","G":"1","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":16.5495,"WalkTravelPerCapita":0.3946,"TruckDelay":0,"AirPollutionEm":640199.6227,"FuelUse":28225707.4895,"VehicleCost":4.3315,"VehicleCostLow":26.4357},
  {"Scenario":"B2C3D2E2F2G2I1L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"2","G":"2","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.0713,"WalkTravelPerCapita":0.3953,"TruckDelay":0,"AirPollutionEm":579197.2346,"FuelUse":25690822.7468,"VehicleCost":5.0326,"VehicleCostLow":25.9698},
  {"Scenario":"B2C3D2E2F2G2I2L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"2","G":"2","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.0644,"WalkTravelPerCapita":0.4009,"TruckDelay":0,"AirPollutionEm":576980.966,"FuelUse":25599452.82,"VehicleCost":4.6456,"VehicleCostLow":26.297},
  {"Scenario":"B2C3D2E2F2G2I3L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"2","G":"2","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":15.1329,"WalkTravelPerCapita":0.4042,"TruckDelay":0,"AirPollutionEm":579228.3202,"FuelUse":25694366.4372,"VehicleCost":4.3328,"VehicleCostLow":26.4376},
  {"Scenario":"B2C3D2E2F2G3I1L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"2","G":"3","I":"1","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.4191,"WalkTravelPerCapita":0.4149,"TruckDelay":0,"AirPollutionEm":468319.4184,"FuelUse":21089114.8577,"VehicleCost":5.0339,"VehicleCostLow":25.9707},
  {"Scenario":"B2C3D2E2F2G3I2L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"2","G":"3","I":"2","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.465,"WalkTravelPerCapita":0.4201,"TruckDelay":0,"AirPollutionEm":468333.7049,"FuelUse":21090097.341,"VehicleCost":4.6469,"VehicleCostLow":26.2978},
  {"Scenario":"B2C3D2E2F2G3I3L2P2T3V2","B":"2","C":"3","D":"2","E":"2","F":"2","G":"3","I":"3","L":"2","P":"2","T":"3","V":"2","GHGReduction":0,"DVMTPerCapita":12.5905,"WalkTravelPerCapita":0.4228,"TruckDelay":0,"AirPollutionEm":472990.7698,"FuelUse":21284603.9184,"VehicleCost":4.3341,"VehicleCostLow":26.4386}
  ]
