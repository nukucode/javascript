//: 22.1 => /* When attaching data payloads to events (whether DOM events or somethign more proprietary like Backbone events) pass an object literal (also know as a "hash") instead of a raw value. This allows a subsequent constributor to add more data to the event payload without finding and updating every handler for the event. */

// bad
$(this).trigger('listingUpdated', listing.id);

// ...

$(this).on('listingUpdated', (e, listingID) => {
  // do something with listingID
});

//* prefer

// good
$(this).trigger('listingUpdated', { listingID: listing.id });

// ...

$(this).on('listingUpdated', (e, data) => {
  // do something with data.listingID
});