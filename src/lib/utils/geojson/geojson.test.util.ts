import type { GeoJsonMultiPolygon, GeoJsonPoint, GeoJsonPolygon } from "."

export const simplePolygon: GeoJsonPolygon = {
	type: "Polygon",
	coordinates: [
		[
			[-1, -1],
			[1, -1],
			[1, 1],
			[-1, 1],
			[-1, -1]
		]
	]
}
export const pointInSimplePolygon: GeoJsonPoint = {
	type: "Point",
	coordinates: [0, 0]
}
export const pointNotInSimplePolygon: GeoJsonPoint = {
	type: "Point",
	coordinates: [2, 0]
}

export const simpleMultiPolygon: GeoJsonMultiPolygon = {
	type: "MultiPolygon",
	coordinates: [
		[
			[
				[-1, -1],
				[1, -1],
				[1, 1],
				[-1, 1],
				[-1, -1]
			]
		],
		[
			[
				[-2, -2],
				[2, -2],
				[2, 2],
				[-2, 2],
				[-2, -2]
			]
		]
	]
}
export const pointInSimpleMultiPolygon: GeoJsonPoint = {
	type: "Point",
	coordinates: [0, 0]
}
export const pointNotInSimpleMultiPolygon: GeoJsonPoint = {
	type: "Point",
	coordinates: [3, 0]
}

export const complexPolygon: GeoJsonPolygon = {
	"type": "Polygon",
	"coordinates": [
		[
			[
				6.036162,
				47.309536
			],
			[
				6.036328,
				47.309699
			],
			[
				6.03674,
				47.309865
			],
			[
				6.037149,
				47.309866
			],
			[
				6.037584,
				47.309962
			],
			[
				6.038642,
				47.310104
			],
			[
				6.038926,
				47.310127
			],
			[
				6.039063,
				47.310172
			],
			[
				6.039928,
				47.310288
			],
			[
				6.040459,
				47.310349
			],
			[
				6.041081,
				47.310454
			],
			[
				6.041283,
				47.310468
			],
			[
				6.041431,
				47.310423
			],
			[
				6.041668,
				47.310509
			],
			[
				6.042085,
				47.310569
			],
			[
				6.042277,
				47.310566
			],
			[
				6.042655,
				47.310672
			],
			[
				6.042888,
				47.310688
			],
			[
				6.043185,
				47.31087
			],
			[
				6.04347,
				47.310802
			],
			[
				6.043771,
				47.310925
			],
			[
				6.044086,
				47.310872
			],
			[
				6.044342,
				47.311194
			],
			[
				6.04519,
				47.311227
			],
			[
				6.045413,
				47.311455
			],
			[
				6.045747,
				47.311528
			],
			[
				6.045881,
				47.311619
			],
			[
				6.046368,
				47.311674
			],
			[
				6.046724,
				47.311812
			],
			[
				6.04763,
				47.312075
			],
			[
				6.048285,
				47.312217
			],
			[
				6.049821,
				47.312576
			],
			[
				6.050595,
				47.312865
			],
			[
				6.05127,
				47.313143
			],
			[
				6.051619,
				47.31332
			],
			[
				6.051879,
				47.313386
			],
			[
				6.052112,
				47.31341
			],
			[
				6.052329,
				47.313531
			],
			[
				6.052441,
				47.313673
			],
			[
				6.052765,
				47.31386
			],
			[
				6.053254,
				47.3142
			],
			[
				6.053875,
				47.314719
			],
			[
				6.054303,
				47.315033
			],
			[
				6.054617,
				47.315362
			],
			[
				6.055064,
				47.315721
			],
			[
				6.055195,
				47.31596
			],
			[
				6.055277,
				47.316024
			],
			[
				6.055608,
				47.316134
			],
			[
				6.055848,
				47.316351
			],
			[
				6.055974,
				47.316533
			],
			[
				6.05642,
				47.316639
			],
			[
				6.056769,
				47.316833
			],
			[
				6.056926,
				47.316992
			],
			[
				6.057039,
				47.31703
			],
			[
				6.057362,
				47.317296
			],
			[
				6.057609,
				47.317301
			],
			[
				6.0577,
				47.31739
			],
			[
				6.058078,
				47.317564
			],
			[
				6.058422,
				47.317656
			],
			[
				6.05866,
				47.317832
			],
			[
				6.058873,
				47.318083
			],
			[
				6.058934,
				47.318516
			],
			[
				6.058925,
				47.318643
			],
			[
				6.059616,
				47.318795
			],
			[
				6.060395,
				47.319007
			],
			[
				6.060819,
				47.319097
			],
			[
				6.061151,
				47.319111
			],
			[
				6.061473,
				47.319229
			],
			[
				6.06166,
				47.319134
			],
			[
				6.061858,
				47.319252
			],
			[
				6.062252,
				47.31937
			],
			[
				6.062473,
				47.319414
			],
			[
				6.062549,
				47.319486
			],
			[
				6.063089,
				47.319657
			],
			[
				6.064884,
				47.319732
			],
			[
				6.066202,
				47.31555
			],
			[
				6.066873,
				47.314676
			],
			[
				6.067122,
				47.314365
			],
			[
				6.067965,
				47.313257
			],
			[
				6.06903,
				47.312087
			],
			[
				6.069585,
				47.311451
			],
			[
				6.069886,
				47.311051
			],
			[
				6.069905,
				47.31093
			],
			[
				6.070038,
				47.310723
			],
			[
				6.070173,
				47.310595
			],
			[
				6.070265,
				47.310443
			],
			[
				6.070608,
				47.310059
			],
			[
				6.070998,
				47.309583
			],
			[
				6.071176,
				47.309433
			],
			[
				6.071679,
				47.309885
			],
			[
				6.071768,
				47.309994
			],
			[
				6.071904,
				47.310274
			],
			[
				6.072039,
				47.310758
			],
			[
				6.072107,
				47.310926
			],
			[
				6.072229,
				47.311069
			],
			[
				6.072942,
				47.311677
			],
			[
				6.073161,
				47.311903
			],
			[
				6.073581,
				47.312295
			],
			[
				6.074122,
				47.31272
			],
			[
				6.074287,
				47.312955
			],
			[
				6.074311,
				47.313135
			],
			[
				6.075254,
				47.314794
			],
			[
				6.075337,
				47.315008
			],
			[
				6.075678,
				47.315537
			],
			[
				6.076168,
				47.31638
			],
			[
				6.076319,
				47.315737
			],
			[
				6.076438,
				47.315383
			],
			[
				6.076684,
				47.314422
			],
			[
				6.07681,
				47.314012
			],
			[
				6.076874,
				47.313877
			],
			[
				6.077195,
				47.312645
			],
			[
				6.077434,
				47.312009
			],
			[
				6.077422,
				47.311796
			],
			[
				6.077626,
				47.311265
			],
			[
				6.077812,
				47.310883
			],
			[
				6.078033,
				47.31026
			],
			[
				6.078414,
				47.309478
			],
			[
				6.078737,
				47.308953
			],
			[
				6.078944,
				47.308562
			],
			[
				6.079391,
				47.307903
			],
			[
				6.079589,
				47.307589
			],
			[
				6.079701,
				47.307357
			],
			[
				6.080753,
				47.305552
			],
			[
				6.081197,
				47.304936
			],
			[
				6.081734,
				47.30416
			],
			[
				6.08201,
				47.303737
			],
			[
				6.082445,
				47.303124
			],
			[
				6.082947,
				47.302345
			],
			[
				6.083348,
				47.301759
			],
			[
				6.083641,
				47.30141
			],
			[
				6.082886,
				47.300949
			],
			[
				6.081037,
				47.299845
			],
			[
				6.079413,
				47.298866
			],
			[
				6.07887,
				47.298608
			],
			[
				6.078416,
				47.298229
			],
			[
				6.07795,
				47.297586
			],
			[
				6.077687,
				47.297125
			],
			[
				6.077319,
				47.296699
			],
			[
				6.07697,
				47.296411
			],
			[
				6.076637,
				47.296072
			],
			[
				6.076681,
				47.295892
			],
			[
				6.076678,
				47.295704
			],
			[
				6.076776,
				47.295024
			],
			[
				6.072364,
				47.292866
			],
			[
				6.071818,
				47.292335
			],
			[
				6.071462,
				47.292028
			],
			[
				6.071149,
				47.291719
			],
			[
				6.070604,
				47.291032
			],
			[
				6.070529,
				47.2909
			],
			[
				6.070294,
				47.289828
			],
			[
				6.069499,
				47.288576
			],
			[
				6.069546,
				47.288547
			],
			[
				6.069418,
				47.288277
			],
			[
				6.069238,
				47.287741
			],
			[
				6.069064,
				47.287414
			],
			[
				6.068733,
				47.28692
			],
			[
				6.06847,
				47.286593
			],
			[
				6.068032,
				47.286175
			],
			[
				6.067738,
				47.285787
			],
			[
				6.067497,
				47.285407
			],
			[
				6.067421,
				47.285408
			],
			[
				6.067276,
				47.28473
			],
			[
				6.067496,
				47.28367
			],
			[
				6.066789,
				47.283397
			],
			[
				6.065216,
				47.282835
			],
			[
				6.061226,
				47.280518
			],
			[
				6.060689,
				47.28011
			],
			[
				6.060542,
				47.279965
			],
			[
				6.060064,
				47.279677
			],
			[
				6.059516,
				47.279316
			],
			[
				6.059015,
				47.279011
			],
			[
				6.058777,
				47.278835
			],
			[
				6.059017,
				47.278541
			],
			[
				6.059187,
				47.278523
			],
			[
				6.059352,
				47.278411
			],
			[
				6.05941,
				47.277166
			],
			[
				6.059594,
				47.276583
			],
			[
				6.060188,
				47.276007
			],
			[
				6.060376,
				47.275758
			],
			[
				6.060763,
				47.275357
			],
			[
				6.06048,
				47.275231
			],
			[
				6.060357,
				47.275127
			],
			[
				6.058615,
				47.274016
			],
			[
				6.057464,
				47.273651
			],
			[
				6.057242,
				47.273336
			],
			[
				6.057154,
				47.273041
			],
			[
				6.056348,
				47.272312
			],
			[
				6.055557,
				47.270656
			],
			[
				6.054816,
				47.270241
			],
			[
				6.054156,
				47.269808
			],
			[
				6.053946,
				47.26965
			],
			[
				6.055177,
				47.26849
			],
			[
				6.055388,
				47.268256
			],
			[
				6.05664,
				47.267125
			],
			[
				6.0564,
				47.266656
			],
			[
				6.055786,
				47.266078
			],
			[
				6.054624,
				47.265637
			],
			[
				6.054542,
				47.265577
			],
			[
				6.053965,
				47.264741
			],
			[
				6.053986,
				47.264507
			],
			[
				6.05349,
				47.263695
			],
			[
				6.053224,
				47.263497
			],
			[
				6.052822,
				47.26343
			],
			[
				6.053105,
				47.262233
			],
			[
				6.05311,
				47.262119
			],
			[
				6.053061,
				47.261562
			],
			[
				6.053026,
				47.260983
			],
			[
				6.052768,
				47.260166
			],
			[
				6.053,
				47.259928
			],
			[
				6.052976,
				47.259898
			],
			[
				6.053689,
				47.259573
			],
			[
				6.054667,
				47.258818
			],
			[
				6.055173,
				47.258162
			],
			[
				6.056034,
				47.257501
			],
			[
				6.056822,
				47.256209
			],
			[
				6.056971,
				47.25589
			],
			[
				6.056915,
				47.255786
			],
			[
				6.056834,
				47.255267
			],
			[
				6.056837,
				47.255095
			],
			[
				6.057021,
				47.254614
			],
			[
				6.0576,
				47.253754
			],
			[
				6.058185,
				47.253267
			],
			[
				6.059086,
				47.252193
			],
			[
				6.05938,
				47.251833
			],
			[
				6.05985,
				47.251415
			],
			[
				6.060438,
				47.251034
			],
			[
				6.059161,
				47.250072
			],
			[
				6.058969,
				47.250001
			],
			[
				6.058889,
				47.2499
			],
			[
				6.058382,
				47.249543
			],
			[
				6.05797,
				47.249215
			],
			[
				6.057792,
				47.249002
			],
			[
				6.058055,
				47.248455
			],
			[
				6.058164,
				47.248343
			],
			[
				6.058844,
				47.247954
			],
			[
				6.058453,
				47.247704
			],
			[
				6.058986,
				47.247219
			],
			[
				6.059408,
				47.24681
			],
			[
				6.059459,
				47.246601
			],
			[
				6.060191,
				47.246078
			],
			[
				6.060525,
				47.245938
			],
			[
				6.060184,
				47.245526
			],
			[
				6.05988,
				47.2452
			],
			[
				6.059803,
				47.24504
			],
			[
				6.059676,
				47.244975
			],
			[
				6.05957,
				47.244742
			],
			[
				6.059254,
				47.244352
			],
			[
				6.059096,
				47.244216
			],
			[
				6.05871,
				47.243776
			],
			[
				6.05842,
				47.243404
			],
			[
				6.05805,
				47.243134
			],
			[
				6.058226,
				47.243049
			],
			[
				6.058973,
				47.242601
			],
			[
				6.059225,
				47.242411
			],
			[
				6.060001,
				47.242006
			],
			[
				6.06047,
				47.241747
			],
			[
				6.061119,
				47.241409
			],
			[
				6.061623,
				47.241094
			],
			[
				6.062188,
				47.240848
			],
			[
				6.062727,
				47.240632
			],
			[
				6.063149,
				47.240446
			],
			[
				6.064165,
				47.240051
			],
			[
				6.06369,
				47.239733
			],
			[
				6.063213,
				47.239362
			],
			[
				6.062473,
				47.238849
			],
			[
				6.062193,
				47.238641
			],
			[
				6.06189,
				47.238302
			],
			[
				6.061571,
				47.237763
			],
			[
				6.061109,
				47.237059
			],
			[
				6.06094,
				47.23675
			],
			[
				6.0607,
				47.236182
			],
			[
				6.060437,
				47.235335
			],
			[
				6.060358,
				47.234996
			],
			[
				6.0601,
				47.234194
			],
			[
				6.059967,
				47.233839
			],
			[
				6.059794,
				47.233476
			],
			[
				6.059641,
				47.233202
			],
			[
				6.059237,
				47.232748
			],
			[
				6.059935,
				47.232354
			],
			[
				6.060343,
				47.232141
			],
			[
				6.060043,
				47.232017
			],
			[
				6.060298,
				47.231738
			],
			[
				6.06037,
				47.231465
			],
			[
				6.060437,
				47.231471
			],
			[
				6.060521,
				47.231055
			],
			[
				6.060635,
				47.230953
			],
			[
				6.060664,
				47.230816
			],
			[
				6.060932,
				47.230321
			],
			[
				6.061042,
				47.230017
			],
			[
				6.060992,
				47.228661
			],
			[
				6.060487,
				47.228273
			],
			[
				6.060107,
				47.227958
			],
			[
				6.059345,
				47.227159
			],
			[
				6.059107,
				47.22679
			],
			[
				6.05896,
				47.226263
			],
			[
				6.059549,
				47.225107
			],
			[
				6.058403,
				47.224825
			],
			[
				6.058377,
				47.224564
			],
			[
				6.058446,
				47.224317
			],
			[
				6.058401,
				47.22396
			],
			[
				6.058525,
				47.223637
			],
			[
				6.058584,
				47.223368
			],
			[
				6.057528,
				47.222675
			],
			[
				6.056425,
				47.222255
			],
			[
				6.056044,
				47.222097
			],
			[
				6.055643,
				47.221859
			],
			[
				6.055183,
				47.221559
			],
			[
				6.05471,
				47.221405
			],
			[
				6.054445,
				47.221188
			],
			[
				6.054056,
				47.220816
			],
			[
				6.05305,
				47.220553
			],
			[
				6.052652,
				47.220423
			],
			[
				6.052214,
				47.220222
			],
			[
				6.051888,
				47.2198
			],
			[
				6.05133,
				47.219584
			],
			[
				6.05041,
				47.219273
			],
			[
				6.05005,
				47.219231
			],
			[
				6.048722,
				47.218582
			],
			[
				6.048167,
				47.218394
			],
			[
				6.047724,
				47.218309
			],
			[
				6.047338,
				47.218268
			],
			[
				6.046894,
				47.218157
			],
			[
				6.046595,
				47.21812
			],
			[
				6.046229,
				47.218129
			],
			[
				6.046159,
				47.218068
			],
			[
				6.045654,
				47.217968
			],
			[
				6.045404,
				47.217829
			],
			[
				6.045091,
				47.217704
			],
			[
				6.044613,
				47.217468
			],
			[
				6.044293,
				47.217425
			],
			[
				6.043377,
				47.217195
			],
			[
				6.043,
				47.217265
			],
			[
				6.042506,
				47.217158
			],
			[
				6.041981,
				47.217065
			],
			[
				6.041342,
				47.216992
			],
			[
				6.038863,
				47.216337
			],
			[
				6.038567,
				47.216219
			],
			[
				6.038054,
				47.21605
			],
			[
				6.037685,
				47.215953
			],
			[
				6.036612,
				47.215846
			],
			[
				6.036227,
				47.215751
			],
			[
				6.034974,
				47.215472
			],
			[
				6.034089,
				47.215302
			],
			[
				6.033669,
				47.215187
			],
			[
				6.032662,
				47.21496
			],
			[
				6.032209,
				47.214723
			],
			[
				6.031798,
				47.214699
			],
			[
				6.031251,
				47.214637
			],
			[
				6.030227,
				47.214537
			],
			[
				6.029981,
				47.214486
			],
			[
				6.029118,
				47.214395
			],
			[
				6.02766,
				47.214117
			],
			[
				6.027079,
				47.213927
			],
			[
				6.026777,
				47.213895
			],
			[
				6.026057,
				47.21379
			],
			[
				6.025148,
				47.213642
			],
			[
				6.024781,
				47.213625
			],
			[
				6.024543,
				47.213568
			],
			[
				6.024357,
				47.213486
			],
			[
				6.024353,
				47.213651
			],
			[
				6.024055,
				47.214401
			],
			[
				6.023723,
				47.21503
			],
			[
				6.023493,
				47.215337
			],
			[
				6.023402,
				47.215497
			],
			[
				6.022415,
				47.214952
			],
			[
				6.0223,
				47.215
			],
			[
				6.021639,
				47.214745
			],
			[
				6.021364,
				47.214676
			],
			[
				6.021015,
				47.214673
			],
			[
				6.020175,
				47.214716
			],
			[
				6.019788,
				47.214718
			],
			[
				6.019592,
				47.214816
			],
			[
				6.019538,
				47.215067
			],
			[
				6.01916,
				47.215083
			],
			[
				6.018617,
				47.214852
			],
			[
				6.018084,
				47.214769
			],
			[
				6.017429,
				47.214456
			],
			[
				6.016636,
				47.216916
			],
			[
				6.016564,
				47.217451
			],
			[
				6.016019,
				47.217395
			],
			[
				6.014863,
				47.217305
			],
			[
				6.014227,
				47.21728
			],
			[
				6.013377,
				47.217216
			],
			[
				6.012039,
				47.217139
			],
			[
				6.011496,
				47.217129
			],
			[
				6.010729,
				47.217098
			],
			[
				6.00971,
				47.217084
			],
			[
				6.008466,
				47.217042
			],
			[
				6.007428,
				47.216947
			],
			[
				6.00678,
				47.216922
			],
			[
				6.006082,
				47.216952
			],
			[
				6.005712,
				47.216955
			],
			[
				6.005363,
				47.216893
			],
			[
				6.004332,
				47.216553
			],
			[
				6.003802,
				47.216337
			],
			[
				6.003268,
				47.21607
			],
			[
				6.00276,
				47.215721
			],
			[
				6.002053,
				47.215268
			],
			[
				6.001206,
				47.214666
			],
			[
				6.000472,
				47.214042
			],
			[
				5.999901,
				47.213472
			],
			[
				5.999007,
				47.212639
			],
			[
				5.998166,
				47.211886
			],
			[
				5.997544,
				47.211282
			],
			[
				5.996987,
				47.210699
			],
			[
				5.99654,
				47.21021
			],
			[
				5.996041,
				47.209723
			],
			[
				5.995826,
				47.209487
			],
			[
				5.994735,
				47.207796
			],
			[
				5.994507,
				47.20739
			],
			[
				5.994419,
				47.207275
			],
			[
				5.99417,
				47.206771
			],
			[
				5.99394,
				47.206185
			],
			[
				5.993842,
				47.205386
			],
			[
				5.993744,
				47.204966
			],
			[
				5.993694,
				47.204634
			],
			[
				5.993585,
				47.20408
			],
			[
				5.993427,
				47.203546
			],
			[
				5.993287,
				47.203254
			],
			[
				5.993115,
				47.20307
			],
			[
				5.992907,
				47.202942
			],
			[
				5.992661,
				47.202866
			],
			[
				5.99222,
				47.202786
			],
			[
				5.991622,
				47.202717
			],
			[
				5.991164,
				47.202624
			],
			[
				5.990949,
				47.202559
			],
			[
				5.990593,
				47.202401
			],
			[
				5.990142,
				47.202003
			],
			[
				5.989941,
				47.201774
			],
			[
				5.989716,
				47.20145
			],
			[
				5.989621,
				47.201228
			],
			[
				5.989543,
				47.200897
			],
			[
				5.989395,
				47.200677
			],
			[
				5.988642,
				47.201297
			],
			[
				5.987906,
				47.201958
			],
			[
				5.987543,
				47.202321
			],
			[
				5.987398,
				47.202232
			],
			[
				5.984598,
				47.203697
			],
			[
				5.981479,
				47.205994
			],
			[
				5.980033,
				47.206479
			],
			[
				5.973452,
				47.208612
			],
			[
				5.970946,
				47.20996
			],
			[
				5.966573,
				47.212225
			],
			[
				5.966535,
				47.212252
			],
			[
				5.964175,
				47.213415
			],
			[
				5.963495,
				47.213718
			],
			[
				5.962109,
				47.213915
			],
			[
				5.962056,
				47.214075
			],
			[
				5.961884,
				47.213403
			],
			[
				5.961607,
				47.212679
			],
			[
				5.961506,
				47.212493
			],
			[
				5.958859,
				47.213241
			],
			[
				5.958547,
				47.213017
			],
			[
				5.953479,
				47.209238
			],
			[
				5.952857,
				47.209427
			],
			[
				5.951382,
				47.209943
			],
			[
				5.949935,
				47.210477
			],
			[
				5.94942,
				47.210655
			],
			[
				5.949249,
				47.210675
			],
			[
				5.948692,
				47.210874
			],
			[
				5.946654,
				47.21211
			],
			[
				5.946548,
				47.212197
			],
			[
				5.946164,
				47.212426
			],
			[
				5.945781,
				47.212676
			],
			[
				5.945324,
				47.212919
			],
			[
				5.940879,
				47.215786
			],
			[
				5.941319,
				47.216235
			],
			[
				5.941055,
				47.21637
			],
			[
				5.941153,
				47.216626
			],
			[
				5.941386,
				47.217142
			],
			[
				5.943227,
				47.218135
			],
			[
				5.943492,
				47.218352
			],
			[
				5.943824,
				47.218557
			],
			[
				5.94405,
				47.218756
			],
			[
				5.944046,
				47.218892
			],
			[
				5.948864,
				47.222433
			],
			[
				5.950694,
				47.224576
			],
			[
				5.951019,
				47.224939
			],
			[
				5.951249,
				47.225284
			],
			[
				5.952032,
				47.2263
			],
			[
				5.952069,
				47.226447
			],
			[
				5.951836,
				47.228076
			],
			[
				5.951829,
				47.228224
			],
			[
				5.952069,
				47.228961
			],
			[
				5.952274,
				47.229342
			],
			[
				5.952311,
				47.229463
			],
			[
				5.952801,
				47.230529
			],
			[
				5.953477,
				47.231689
			],
			[
				5.953507,
				47.231689
			],
			[
				5.953992,
				47.232322
			],
			[
				5.955012,
				47.233048
			],
			[
				5.956461,
				47.234066
			],
			[
				5.957072,
				47.234481
			],
			[
				5.957936,
				47.23513
			],
			[
				5.958604,
				47.235549
			],
			[
				5.963047,
				47.239269
			],
			[
				5.963626,
				47.239686
			],
			[
				5.964675,
				47.240568
			],
			[
				5.965403,
				47.241136
			],
			[
				5.965503,
				47.241248
			],
			[
				5.965795,
				47.241025
			],
			[
				5.965989,
				47.240819
			],
			[
				5.966358,
				47.240613
			],
			[
				5.96665,
				47.240414
			],
			[
				5.967239,
				47.240462
			],
			[
				5.967749,
				47.240455
			],
			[
				5.969507,
				47.242279
			],
			[
				5.969682,
				47.242445
			],
			[
				5.969992,
				47.242809
			],
			[
				5.970161,
				47.2431
			],
			[
				5.970192,
				47.243227
			],
			[
				5.970396,
				47.243588
			],
			[
				5.970641,
				47.243829
			],
			[
				5.970917,
				47.243987
			],
			[
				5.97147,
				47.244471
			],
			[
				5.971666,
				47.244622
			],
			[
				5.971915,
				47.244735
			],
			[
				5.971956,
				47.24525
			],
			[
				5.972015,
				47.24549
			],
			[
				5.972164,
				47.245676
			],
			[
				5.972474,
				47.245854
			],
			[
				5.972569,
				47.246284
			],
			[
				5.972324,
				47.248612
			],
			[
				5.972254,
				47.248719
			],
			[
				5.971652,
				47.249426
			],
			[
				5.973259,
				47.250795
			],
			[
				5.973954,
				47.251343
			],
			[
				5.975092,
				47.251491
			],
			[
				5.975666,
				47.251394
			],
			[
				5.975803,
				47.251505
			],
			[
				5.976334,
				47.251466
			],
			[
				5.976652,
				47.251879
			],
			[
				5.977589,
				47.252527
			],
			[
				5.978421,
				47.253954
			],
			[
				5.979784,
				47.255321
			],
			[
				5.980174,
				47.255688
			],
			[
				5.981404,
				47.256946
			],
			[
				5.981664,
				47.25734
			],
			[
				5.981962,
				47.257747
			],
			[
				5.982066,
				47.257973
			],
			[
				5.982209,
				47.258039
			],
			[
				5.982372,
				47.258331
			],
			[
				5.982706,
				47.258745
			],
			[
				5.982969,
				47.259341
			],
			[
				5.983817,
				47.26001
			],
			[
				5.983897,
				47.26009
			],
			[
				5.984474,
				47.260439
			],
			[
				5.984721,
				47.260574
			],
			[
				5.985299,
				47.260934
			],
			[
				5.985719,
				47.261254
			],
			[
				5.986295,
				47.261758
			],
			[
				5.986506,
				47.26198
			],
			[
				5.98686,
				47.262245
			],
			[
				5.988059,
				47.263178
			],
			[
				5.988224,
				47.263372
			],
			[
				5.988281,
				47.263505
			],
			[
				5.988376,
				47.263701
			],
			[
				5.988759,
				47.26421
			],
			[
				5.989137,
				47.26488
			],
			[
				5.989284,
				47.264999
			],
			[
				5.989524,
				47.265256
			],
			[
				5.990114,
				47.265824
			],
			[
				5.990488,
				47.26626
			],
			[
				5.990559,
				47.266564
			],
			[
				5.990966,
				47.2671
			],
			[
				5.991846,
				47.267586
			],
			[
				5.992409,
				47.267759
			],
			[
				5.992659,
				47.267853
			],
			[
				5.993731,
				47.268448
			],
			[
				5.993927,
				47.268543
			],
			[
				5.994146,
				47.268695
			],
			[
				5.994304,
				47.268303
			],
			[
				5.99465,
				47.268156
			],
			[
				5.995097,
				47.268313
			],
			[
				5.995322,
				47.268692
			],
			[
				5.995461,
				47.268787
			],
			[
				5.996039,
				47.269056
			],
			[
				5.996434,
				47.269272
			],
			[
				5.996788,
				47.269489
			],
			[
				5.997188,
				47.269665
			],
			[
				5.997935,
				47.270056
			],
			[
				5.998131,
				47.270358
			],
			[
				5.998249,
				47.270379
			],
			[
				5.999082,
				47.271422
			],
			[
				5.999163,
				47.271797
			],
			[
				5.999264,
				47.271929
			],
			[
				5.999752,
				47.272279
			],
			[
				6.000597,
				47.272782
			],
			[
				6.001342,
				47.273159
			],
			[
				6.003177,
				47.273969
			],
			[
				6.003235,
				47.273922
			],
			[
				6.004116,
				47.274831
			],
			[
				6.004208,
				47.274973
			],
			[
				6.004423,
				47.275076
			],
			[
				6.005365,
				47.275482
			],
			[
				6.00581,
				47.275694
			],
			[
				6.005009,
				47.276095
			],
			[
				6.004918,
				47.276262
			],
			[
				6.004916,
				47.276517
			],
			[
				6.004867,
				47.276706
			],
			[
				6.004847,
				47.277356
			],
			[
				6.004678,
				47.277672
			],
			[
				6.004657,
				47.277829
			],
			[
				6.004944,
				47.278466
			],
			[
				6.005094,
				47.278732
			],
			[
				6.005362,
				47.279499
			],
			[
				6.00534,
				47.279925
			],
			[
				6.005342,
				47.280675
			],
			[
				6.005286,
				47.280895
			],
			[
				6.005347,
				47.282079
			],
			[
				6.005179,
				47.282369
			],
			[
				6.004909,
				47.283
			],
			[
				6.006108,
				47.284703
			],
			[
				6.005606,
				47.285553
			],
			[
				6.005083,
				47.286521
			],
			[
				6.004276,
				47.287081
			],
			[
				6.003473,
				47.287687
			],
			[
				6.002279,
				47.288504
			],
			[
				6.001472,
				47.288973
			],
			[
				6.001572,
				47.289429
			],
			[
				6.001572,
				47.289627
			],
			[
				6.001511,
				47.289754
			],
			[
				6.001825,
				47.290008
			],
			[
				6.002324,
				47.290343
			],
			[
				6.003005,
				47.290922
			],
			[
				6.003406,
				47.291277
			],
			[
				6.004599,
				47.292401
			],
			[
				6.005622,
				47.292994
			],
			[
				6.006995,
				47.293582
			],
			[
				6.008477,
				47.294344
			],
			[
				6.009716,
				47.294911
			],
			[
				6.009944,
				47.295026
			],
			[
				6.010968,
				47.295431
			],
			[
				6.012882,
				47.296728
			],
			[
				6.014477,
				47.297703
			],
			[
				6.015657,
				47.298278
			],
			[
				6.015932,
				47.298458
			],
			[
				6.016443,
				47.298731
			],
			[
				6.016888,
				47.299065
			],
			[
				6.017269,
				47.299253
			],
			[
				6.017533,
				47.299426
			],
			[
				6.017882,
				47.299603
			],
			[
				6.018274,
				47.299676
			],
			[
				6.018749,
				47.299883
			],
			[
				6.019057,
				47.300037
			],
			[
				6.019387,
				47.300158
			],
			[
				6.019941,
				47.300329
			],
			[
				6.02102,
				47.300405
			],
			[
				6.021538,
				47.300538
			],
			[
				6.02228,
				47.300839
			],
			[
				6.023143,
				47.301148
			],
			[
				6.023645,
				47.301338
			],
			[
				6.024115,
				47.30154
			],
			[
				6.024609,
				47.301702
			],
			[
				6.025668,
				47.30212
			],
			[
				6.026175,
				47.302333
			],
			[
				6.026635,
				47.302495
			],
			[
				6.027783,
				47.303018
			],
			[
				6.028236,
				47.303285
			],
			[
				6.028551,
				47.303433
			],
			[
				6.029138,
				47.303669
			],
			[
				6.031015,
				47.304934
			],
			[
				6.031487,
				47.305304
			],
			[
				6.031763,
				47.305501
			],
			[
				6.032201,
				47.305894
			],
			[
				6.032512,
				47.306052
			],
			[
				6.032743,
				47.306217
			],
			[
				6.032945,
				47.306286
			],
			[
				6.033185,
				47.306466
			],
			[
				6.034118,
				47.307109
			],
			[
				6.034508,
				47.30743
			],
			[
				6.035086,
				47.308166
			],
			[
				6.035503,
				47.308615
			],
			[
				6.035682,
				47.308844
			],
			[
				6.036109,
				47.309493
			],
			[
				6.036162,
				47.309536
			]
		]
	]
}
export const pointInComplexPolygon: GeoJsonPoint = {
	"type": "Point",
	"coordinates": [
		6.025398991111899,
		47.23390912659872
	]
}
export const pointNotInComplexPolygon: GeoJsonPoint = {
	"type": "Point",
	"coordinates": [
		6.037286118725945,
		47.18973228821855
	]
}