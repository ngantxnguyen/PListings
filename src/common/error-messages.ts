export enum ErrMsg {
  // General
  DuplicateKey = 'MongoDB Duplicate Key Error',
  ValidationError = 'Validation Error',
  MissingProperties = 'Missing required properties',
  InvalidRequest = 'Invalid Request',
  InvalidCredentials = 'Invalid Credentials',
  NoDocWithId = 'No document found with the provided ID',

  // Authentication
  JwtInvalid = 'Invalid token. Please log in again',
  JwtExpired = 'Your token has expired. Please log in again',
  JwtNotFoundUserWithToken = 'Cannot find user with this token',
  Unauthenticated = 'You are not logged in. Please log in to get access',
  MissingDataForJWT = 'Missing data needed to create JWT',
  MissingDataForCookie = 'Missing data to create cookie',
  AccessRestriction = 'You do not have permission to perform this action',
  ResetTokenInvalidOrExpired = 'Reset Token is invalid or has expired',

  // Location
  LocationCoorsRequired = 'Location Coordinates are required',
  LocationCoorsLength = 'Location Coordinates must have exactly two values: [long, lat]',
  LocationZipRequired = 'Location Zipcode is required',
  LocationCityRequired = 'Location City is required',
  LocationStateRequired = 'Location State is required',
  LocationCountryRequired = 'Location Country is required',
  LocationInvalid = 'Please enter a valid location',
  LocationRequired = 'Please provide a location',
  LocationDropdownListSelection = 'Please select a location from the dropdown list',

  // Users
  NameRequired = 'Please enter your name',
  EmailRequired = 'Please enter your email',
  EmailInvalid = 'Please enter a valid email',
  PasswordRequired = 'Please enter your password',
  PasswordMinLength = 'Password requirement: minium 8 characters',
  PasswordConfirmRequired = 'Please confirm your password',
  PasswordCurrentRequired = 'Please enter your current password',
  PasswordNewRequired = 'Please enter your new password',
  PasswordNewConfirmRequired = 'Please confirm your new password',
  PasswordConfirmNotMatch = 'Password confirmation does not match',
  BioMaxLength = 'Your biography should be less than 150 characters',
  PasswordChangeRestrictedToAccountOwner = `You do not have permission to change other user's password`,
  NotPasswordChangeRoute = 'This route is not for password updates. Please use /update-my-password.',
  NoUserWithEmail = 'No user with the provided email',
  NoUserWithId = 'No user found with the provided ID',
  SendEmailIssue = 'There was an error sending the email. Try again later.',
  EmailInUse = 'This email is already in use. Please enter another email',
  InactiveAccount = 'Your account has been deactivated. Please log in to activate your account',
  SuspendedAccount = 'Your account has been suspended',

  // Listings
  TitleRequired = 'Please enter a title',
  TitleMaxLength = 'Title length should be less than 70 characters',
  PhotosRequired = 'At least one photo is required to post a listing',
  PhotosLength = 'A listing is required to have at least 1 photo but no more than 10',
  PriceRequired = 'Please enter a price',
  PriceNegative = 'Please enter a non-negative number',
  CategoryRequired = 'Please choose a category',
  SubcategoryRequired = 'Please choose a subcategory',
  SubcategoryNotInCategory = 'Subcategory is not a member of the current Category. Please choose an appropriate subcategory for each category.',
  DescriptionMaxLength = 'Description length cannot be over 1450 characters',
  BrandMaxLength = 'Brand length cannot be over 100 characters',
  OwnerRequired = 'A listing must belong to a user',
  UnauthorizedToMadeChangesToOtherUsersListings = 'You cannot make changes to listings that you do not own',

  // Image
  ImageInvalid = 'Not an image. Please upload only image',

  // Favorite
  UserIdRequired = 'Please provide a user ID',
  ListingIdRequired = 'Please provide a listing ID',
  OwnerCannotFavoriteOwnListing = 'The owner cannot favorite/save their own listing',
}
