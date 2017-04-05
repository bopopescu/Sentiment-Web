/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START language_quickstart]
// Imports the Google Cloud client library
const Language = require('@google-cloud/language');

// Your Google Cloud Platform project ID
const projectId = 'valiant-store-160313';

// Instantiates a client
const languageClient = Language({
  projectId: projectId
});

// The text to analyze
const text = 'Hello, world! I don’t know what to wear on Crunch Report (It’s a hard decision and I suck at dressing myself). If you are a startup and want to me to wear something mail me an XL T-shirt and I’ll wear it in an episode. I’m not going to mention the company on the shirt in the episode but it will be there. No offensive stuff, it’s totally at my discretion if I wear it. Mail it to me. Thanks <3 Ok, bye.';

// Detects the sentiment of the text
languageClient.detectSentiment(text)
  .then((results) => {
    const sentiment = results[0];

    console.log(`Text: ${text}`);
    console.log(`Sentiment: ${sentiment}`);
  });
// [END language_quickstart]
