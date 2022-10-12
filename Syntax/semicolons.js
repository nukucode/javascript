//: Semicolons In Javascript

//* When there is a place where a semicolon is needed, it adds it behind the scenes. This is called Automatic Semicolon Insertion (ASI)

//# The rules of Javascript Automatic Semicolon Insertion

/* 

The JavaScript parser will automatically add a semicolon when, during the parsing of the source code, it finds these particular situations:

1.when the next line starts with code that breaks the current one (code can spawn on multiple lines)
2.when the next line starts with a }, closing the current block
3.when the end of the source code file is reached
4.when there is a return statement on its own line
5.when there is a break statement on its own line
6.when there is a throw statement on its own line
7.when there is a continue statement on its own line

*/
