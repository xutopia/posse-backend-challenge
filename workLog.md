# Log of work

|        Tasks         |    Date   |  Time Spent  |                            Comments                                      |
|:--------------------:|:---------:|:------------:|:------------------------------------------------------------------------:|
| Folder setup         |    4/3    |    1 hour    | Create folders and files for the task, begin thinking about database schemas |
| Schemas setup        |    4/4    |  0.5 hours   | Create schemas for locations, services, and programmers tables |
| DB refactor          |    4/6    |    3 hours   | Reviewed MongoDB, setup Mlab, parse and import JSON file, create simple server |
| API setup            |    4/7    |    3 hours   | Create mongoose query, API route, remove the embedded _id field |
| Final cleanup        |    4/7    |    2 hours   | update README, workLog, test server/route, add comments |




## Notes
The auto generated `_id` field was removed from the nested arrays in the mongo documents (see "LocationSchema") to make returning the data from the API call a bit simpler. Due to the fact that there are no requests for partial data, the `_id` field was deemed unnecessary. However, there are drawbacks for not including the `_id` field, mainly the optimizations that are included with `_id` field.
