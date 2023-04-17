# Template UI - Pipes

## Intro

Make sure to always add pipe modules
Make sure to add pipe modules to app.testing-module.ts
Do not modify anything else in tests folder (only app.testing-module.ts)

In get instant feedback simply run `npx nx test`

If you want to check your solution and run it in the browser:
Make sure to add pipe modules to app.module.ts
Make sure to use your pipe in the template
Make sure to run `npm start`

## DistancePipe

Create DistancePipe with the name `distance` that will take either string or a number representing distance in meters and then it will output new value and show the distance unit (meters or kilometers)

if the distance is between 0 and 750 meters, then show meters and add 'm' suffix
if the distance is more than 750 meters, then show kilometers and add 'km' suffix

If there is a decimal part, round to a maximum of 2 places.

## FileSizePipe

Create FileSizePipe with the name `fileSize` that will take a number representing the size of a file (in B) as a parameter and then it will output a string with the biggest possible data size suffix: B, KB, MB, GB, TB, PB - read about megabytes, gigabytes etc.

## TeaserPipe

Create TeaserPipe with the name `teaser` that will take a string with sentences as parameter as well as the minimum amount of words.

If the string has **less** words than minimum amount of words provided, then output the string normally
If the string has **more** words than minimum amount of words provided, then output first words and add `...` string at the end

## FilterPipe

Create FilterPipe with the name `filter` that will take an array representing data to filter as parameter. The second parameter will be the criterion that represents a function that will perform the filtering.

## SortPipe

Create SortPipe with the name `sort` that will take an array of strings or a null as first parameter representing array of strings to sort. The second parameter will be a diraction that allows values: `asc` or `desc` representing direction in which to perform the sort.

In case of lack of direction param a value of `asc` should be used
If the array is null, it will output same array
If the array is not null, it will perform sorting taking into account the direction parameter

## SearchPipe

Create SearchPipe with the name `search` that will take 2 parametes:

First parameter of type string that represent a sentence to be parsed.
Second paramter of type string that represents a substring to be found in each word in that sentence.

The pipe returns an array of found words.

If the array of found words is empty, then throw an error 'No Result'.

## CreditCardNumberPipe

Create CreditCardNumberPipe with the name `creditCardNumber` that will take a string representing the credit card number as a parameter and then it will output a formatted version of the credit card number.

The parameter must have exactly 16 digits, but it may contain spaces “ “, dashes “-” and other symbols.

Your goal is to output 16 digits with space between each 4 sections like this: `1234 5678 9012 3456`

Keep in mind that spaces, - and other symbols can be at any position.

When the wrong length of digits is given, then throw an error `Invalid card number string: ${value}`.
When the input is incorrect type, then throw an error `Incorrect input type. It must be a string.`.

## PhoneNumberPipe

Create PhoneNumberPipe with the name `phoneNumber` that will take a string representing a phone number as a parameter and then it will output a formatted version of the phone number.

The number might or might not contain 0048 or +48

The parameter might have 9 digits for mobile number or 2 digits for directional + 7 digits for landline number.
The directional numbers are: `12 13 14 15 16 17 18 22 23 24 25 29 32 33 34 41 42 43 44 46 48 52 54 55 56 58 59 61 62 63 65 67 68 71 74 75 76 77 81 82 83 84 85 86 87 89 91 94 95`

If the number starts with one of these, then it is a landline number.

Make sure that every number starts with `+48` (even if it was not present)
Sometimes the number can start with `0048` then make sure to format it to `+48`
If it is a mobile number, then format it like this: `+48 642 123 123`
If it is a landline number then format it like this: `+48 (22) 651 12 12`
If the length of the input phone number is invalid (without prefix 0048 or +48), then throw an error 'Invalid Phone Number'

## Placeholder image

Create PlaceholderImgPipe with the name `placeholderImg` that will take a string or null representing source of the image and then it will output appropriate src value for the image.

If the parameter is not null, then return this value
If the parameter is null, then fall back to predefined image value.

Allow user to globally change the value for placeholder image and use value provider that you provide in pipe module like this:

```
{
    provide: 'PLACEHOLDER_IMAGE_SOURCE',
    useValue: `/assets/img/placeholder.png`,
  }
```

This way you can access this provider's value in pipe.

## Translate

Create TranslatePipe with the name `translate` that will take 2 parameters.

First parameter is a string that represents a unique string constant that needs to be translated.
Second paramter is a string that represents a language being translated to

Allow user to define the translation via value provider that you provide in pipe module like this:

```
{
    provide: 'TRANSLATION',
    useValue: {
      en: {
        ONE: 'One',
      },
      pl: {
        ONE: 'Jeden',
      },
    }
  }
```

## Data Structure Impure pipes

Pipes that need to be impure in order to bypass the memoization mechanism.

### Pluck

Create a pipe with selector `pluck`.

First parameter will be `Record<string, unknown>` representing an object on which perform a pluck (reduce object to a single property value).

Second parameter will be `string` representing property on which to pluck.

Return the value of given property in that object.

### MaxNumber

Create a pipe with selector `maxNumber`.

First parameter will be `number[]` representing data array to contain numbers to search for maximum number in that array.

Return the highest number in given data array.
