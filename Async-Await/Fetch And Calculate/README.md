## Problem: Fetch and Calculate Sum of "id"

You are given a list of URLs that point to JSON data. Each JSON object contains an "id" property, which is a number. 
Your task is to fetch the JSON data from each URL, extract the "id" from it, and calculate the sum of all the "id" values.

Write a JavaScript function fetchAndCalculateIdSum(urls) that takes an array of URLs as input and returns a Promise that resolves to the sum of all the "id" values in the JSON objects fetched from the URLs. 
Use the fetch function to retrieve the JSON data.
