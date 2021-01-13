hashSimple("April") == (1 + 16 + 18 + 9 + 12) % 11 == 56 % 11 == 1
// => April goes at 1 N. Perfect Ave
hashSimple("Carol") == (3 + 1 + 18 + 15 + 12) % 11 == 49 % 11 == 5
// => Carol goes at 5 N. Perfect Ave
hashSimple("Cary") == (3 + 1 + 18 + 25) % 11 == 47 % 11 == 3
// => Cary goes at 3 N. Perfect Ave
hashSimple("David") == (4 + 1 + 22 + 9 + 4) % 11 == 40 % 11 == 7
// => David goes at 7 N. Perfect Ave
hashSimple("Ellen") == (5 + 12 + 12 + 5 + 14) % 11 == 48 % 11 == 4
// => Ellen goes at 4 N. Perfect Ave
hashSimple("Jim") == (10 + 9 + 13) % 11 == 32 % 11 == 10
// => Jim goes at 10 N. Perfect Ave
hashSimple("Joel") == (10 + 15 + 5 + 12) % 11 == 42 % 11 == 9
// => Joel goes at 9 N. Perfect Ave
hashSimple("Lucille") == (12 + 21 + 3 + 9 + 12 + 12 + 5) % 11 == 74 % 11 == 8
// => Lucille goes at 8 N. Perfect Ave
hashSimple("Mary") == (13 + 1 + 18 + 25) % 11 == 57 % 11 == 2
// => Mary goes at 2 N. Perfect Ave
hashSimple("Ruby") == (18 + 21 + 2 + 25) % 11 == 66 % 11 == 0
// => Ruby goes at 0 N. Perfect Ave
hashSimple("Sara") == (19 + 1 + 18 + 1) % 11 == 39 % 11 == 6
// => Sara goes at 6 N. Perfect Ave

hash("Jean-Luc") == (10 + 5 + 1 + 14 + 12 + 21 + 3) % 11 == 66 % 11 == 0
// => Starting address for Jean-Luc is 0 E. Linear Ln.
hash("William") == (23 + 9 + 12 + 12 + 9 + 1 + 13) % 11 == 79 % 11 == 2
// => Starting address for William is 2 E. Linear Ln.
hash("Data") == (4 + 1 + 20 + 1) % 11 == 26 % 11 == 4
// => Starting address for Data is 4 E. Linear Ln.
hash("Geordi") == (7 + 5 + 15 + 18 + 4 + 9) % 11 == 58 % 11 == 3
// => Starting address for Geordi is 3 E. Linear Ln.
hash("Worf") == (23 + 15 + 18 + 6) % 11 == 62 % 11 == 7
// => Starting address for Worf is 7 E. Linear Ln.
hash("Deanna") == (4 + 5 + 1 + 14 + 14 + 1) % 11 == 39 % 11 == 6
// => Starting address for Deanna is 6 E. Linear Ln.
hash("Wesley") == (23 + 5 + 19 + 12 + 5 + 25) % 11 == 89 % 11 == 1
// => Starting address for Wesley is 1 E. Linear Ln.

// linearHash()

hash("Beverly") == (2 + 5 + 22 + 5 + 18 + 12 + 25) % 11 == 89 % 11 == 1
// => Beverly should go at 1 E. Linear Ln.

hash("Tasha") == (20 + 1 + 19 + 8 + 1) % 11 == 49 % 11 == 5
// => Starting address for Tasha is 5 E. Linear Ln.

hash("Guinan") == (7 + 21 + 9 + 14 + 1 + 14) % 11 == 66 % 11 == 0
// => Starting address for Guinan is 0 E. Linear Ln.

hash("Miles") == (13 + 9 + 12 + 5 + 19) % 11 == 58 % 11 == 3
// => Starting address for Miles is 3 E. Linear Ln.

// 1 + 1 + 1 + 1 + 1 + 1 + 1 + 5 + 4 + 10 + 8 = 34 total operations for 11 residents

// CHAINING:

hash("Johann Sebastian") == (10 + 15 + 8 + 1 + 14 + 14 + 19 + 5 + 2 + 1 + 19 + 20 + 9 + 1 + 14) % 11 == 152 % 11 == 9
// => Johann Sebastian can live at 9 N. Chaining Ct.
hash("Wolfgang") == (23 + 15 + 12 + 6 + 7 + 1 + 14 + 7) % 11 == 85 % 11 == 8
// => Wolfgang can live at 8 N. Chaining Ct.
hash("Ludwig") == (12 + 21 + 4 + 23 + 9 + 7) % 11 == 76 % 11 == 10
// => Ludwig can live at 10 N. Chaining Ct.
hash("Antonio") == (1 + 14 + 20 + 15 + 14 + 9 + 15) % 11 == 88 % 11 == 0
// => Antonio can live at 0 N. Chaining Ct.
hash("Frederic") == (6 + 18 + 5 + 4 + 5 + 18 + 9 + 3) % 11 == 68 % 11 == 2
// => Frederic can live at 2 N. Chaining Ct.
hash("Maurice") == (13 + 1 + 21 + 18 + 9 + 3 + 5) % 11 == 70 % 11 == 4
// => Maurice can live at 4 N. Chaining Ct.
hash("Arvo") == (1 + 18 + 22 + 15) % 11 == 56 % 11 == 1
// => Arvo can live at 1 N. Chaining Ct.
hash("Hildegard") == (8 + 9 + 12 + 4 + 5 + 7 + 1 + 18 + 4) % 11 == 68 % 11 == 2
// => Hildegard can live at 2 N. Chaining Ct.
hash("Clara") == (3 + 12 + 1 + 18 + 1) % 11 == 35 % 11 == 2
// => Clara can live at 2 N. Chaining Ct.
hash("Pyotr") == (16 + 25 + 15 + 20 + 18) % 11 == 94 % 11 == 6
// => Pyotr can live at 6 N. Chaining Ct.
hash("Igor") == (9 + 7 + 15 + 18) % 11 == 49 % 11 == 5
// => Igor can live at 5 N. Chaining Ct.
