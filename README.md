# Intelligent Intent Matching

## Generate the training data
Due to large file sizes none of the training data is included. You can generate it yourself (assuming you have [Node installed](https://nodejs.org/en/)).
1. run `node generateRawUtterances.js` to generate the training data from parts of the `interaction-model.json`.
1. run `node createCsv.js` to generate training data in CSV format.
1. run `createShuffledIntentsUtterancesEntitiesCsv.js` to generate training data for `PlayRadioIntent` and `PlayPodcastIntent` intents.
All the generated training data filea are output in the `data` directory.

## Anaconda Distribution Python
This project assumes you are working with [Anaconda Distribution Python](https://www.anaconda.com/distribution/).
1. Download and install Anaconda if you haven't got it already [from here](https://www.anaconda.com/distribution/#download-section).
1. Create an environment with the same version of Python and packages that I used by running `conda env create --file dissertation-env.txt`
1. Navigate to where the repository is and activate the environment WINDOWS: `activate dissertation-env` or LINUX, macOS: `source activate dissertation-env`.
1. Once finished, deactivte the environment with WINDOWS: `deactivate` or LINUX, macOS: `source deactivate`.

## Jupyter Notebook
This project makes use of [Jupyter](https://jupyter.org/) Notebooks.
1. To activate the notebook, from within the repository run `jupyter notebook`.
1. Either a browser will open automatically to [http://localhost:8888/tree](http://localhost:8888/tree) or you will have to manually open a browser and navigate there. 
1. The first page should be an index page at the root of this project. To view an individual notebook click on it and it should open in a new tab.
1. The notebook should be running automatically. To stop the notebook, in the browser press quit at the top of the index page.

## Important!
* Each notebook has been saved with the previous output in place. You can run the notebooks yourself but be aware that they may take many hours to execute. 
* The trained_model.pickle has been saved and is available for you to read in. This should save you from having to train the model yourself, however, it has been saved in binary it may not work depending on the architecture of your machine. [See here for more information about pickle.](https://docs.python.org/3/library/pickle.html#data-stream-format)