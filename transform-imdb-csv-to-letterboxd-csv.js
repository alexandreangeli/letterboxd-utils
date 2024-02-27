const csvData = `Position,Const,Created,Modified,Description,Title,URL,Title Type,IMDb Rating,Runtime (mins),Year,Genres,Num Votes,Release Date,Directors
1,tt0109830,2016-09-02,2016-09-02,,Forrest Gump,https://www.imdb.com/title/tt0109830/,movie,8.8,142,1994,"Drama, Romance",2167369,1994-06-23,Robert Zemeckis
2,tt1431045,2016-08-29,2016-08-29,,Deadpool,https://www.imdb.com/title/tt1431045/,movie,8.0,108,2016,"Action, Comedy",1083385,2016-01-21,Tim Miller
3,tt0371724,2016-08-29,2016-08-29,,The Hitchhiker's Guide to the Galaxy,https://www.imdb.com/title/tt0371724/,movie,6.7,109,2005,"Adventure, Comedy, Sci-Fi",204447,2005-04-20,Garth Jennings
4,tt3460252,2016-08-29,2016-08-29,,The Hateful Eight,https://www.imdb.com/title/tt3460252/,movie,7.8,168,2015,"Crime, Drama, Mystery, Thriller, Western",633253,2015-12-07,Quentin Tarantino
5,tt2488496,2016-08-29,2016-08-29,,Star Wars: Episode VII - The Force Awakens,https://www.imdb.com/title/tt2488496/,movie,7.8,138,2015,"Action, Adventure, Sci-Fi",954277,2015-12-14,J.J. Abrams
6,tt2975590,2016-08-29,2016-08-29,,Batman v Superman: Dawn of Justice,https://www.imdb.com/title/tt2975590/,movie,6.4,151,2016,"Action, Adventure, Sci-Fi",718610,2016-03-12,Zack Snyder
7,tt3086442,2016-08-29,2016-08-29,,"Ich seh, Ich seh",https://www.imdb.com/title/tt3086442/,movie,6.7,99,2014,"Horror, Mystery, Thriller",57756,2014-08-30,"Veronika Franz, Severin Fiala"
8,tt0117951,2016-08-29,2016-08-29,,Trainspotting,https://www.imdb.com/title/tt0117951/,movie,8.1,93,1996,Drama,707263,1996-02-23,Danny Boyle
9,tt0266697,2016-08-29,2016-08-29,,Kill Bill: Vol. 1,https://www.imdb.com/title/tt0266697/,movie,8.2,111,2003,"Action, Crime, Thriller",1154062,2003-09-29,Quentin Tarantino
10,tt0378194,2016-08-29,2016-08-29,,Kill Bill: Vol. 2,https://www.imdb.com/title/tt0378194/,movie,8.0,137,2004,"Action, Crime, Thriller",781804,2004-04-08,Quentin Tarantino
11,tt1675434,2016-08-29,2016-08-29,,Intouchables,https://www.imdb.com/title/tt1675434/,movie,8.5,112,2011,"Biography, Comedy, Drama",893682,2011-09-23,"Olivier Nakache, Éric Toledano"
12,tt3799694,2016-08-29,2016-08-29,,The Nice Guys,https://www.imdb.com/title/tt3799694/,movie,7.4,116,2016,"Action, Comedy, Crime, Thriller",351386,2016-05-10,Shane Black
13,tt1179933,2016-08-30,2016-08-30,,10 Cloverfield Lane,https://www.imdb.com/title/tt1179933/,movie,7.2,103,2016,"Drama, Horror, Mystery, Sci-Fi, Thriller",343264,2016-03-08,Dan Trachtenberg
14,tt0365748,2016-08-30,2016-08-30,,Shaun of the Dead,https://www.imdb.com/title/tt0365748/,movie,7.9,99,2004,"Comedy, Horror",577197,2004-03-29,Edgar Wright
15,tt0425112,2016-08-31,2016-08-31,,Hot Fuzz,https://www.imdb.com/title/tt0425112/,movie,7.8,121,2007,"Action, Comedy, Mystery, Thriller",522372,2007-02-13,Edgar Wright
16,tt1213663,2016-08-31,2016-08-31,,The World's End,https://www.imdb.com/title/tt1213663/,movie,6.9,109,2013,"Action, Comedy, Sci-Fi",291909,2013-07-10,Edgar Wright
17,tt0068646,2016-09-01,2016-09-01,,The Godfather,https://www.imdb.com/title/tt0068646/,movie,9.2,175,1972,"Crime, Drama",1940439,1972-03-14,Francis Ford Coppola
18,tt0803096,2016-09-03,2016-09-03,,Warcraft,https://www.imdb.com/title/tt0803096/,movie,6.7,123,2016,"Action, Adventure, Fantasy",272564,2016-05-24,Duncan Jones
19,tt3498820,2016-09-04,2016-09-04,,Captain America: Civil War,https://www.imdb.com/title/tt3498820/,movie,7.8,147,2016,"Action, Sci-Fi",823200,2016-04-12,"Anthony Russo, Joe Russo"
20,tt0945513,2016-09-05,2016-09-05,,Source Code,https://www.imdb.com/title/tt0945513/,movie,7.5,93,2011,"Action, Drama, Mystery, Sci-Fi, Thriller",535340,2011-03-11,Duncan Jones
21,tt0071562,2016-09-05,2016-09-05,,The Godfather Part II,https://www.imdb.com/title/tt0071562/,movie,9.0,202,1974,"Crime, Drama",1318635,1974-12-12,Francis Ford Coppola
22,tt1392190,2016-09-06,2016-09-06,,Mad Max: Fury Road,https://www.imdb.com/title/tt1392190/,movie,8.1,120,2015,"Action, Adventure, Sci-Fi, Thriller",1043816,2015-05-07,George Miller
23,tt3170832,2016-09-08,2016-09-08,,Room,https://www.imdb.com/title/tt3170832/,movie,8.1,118,2015,"Drama, Thriller",436680,2015-09-04,Lenny Abrahamson
24,tt0099674,2016-09-08,2016-09-08,,The Godfather Part III,https://www.imdb.com/title/tt0099674/,movie,7.6,162,1990,"Crime, Drama",412134,1990-12-20,Francis Ford Coppola
25,tt0040746,2016-09-09,2016-09-09,,Rope,https://www.imdb.com/title/tt0040746/,movie,7.9,80,1948,"Crime, Drama, Mystery, Thriller",149234,1948-08-23,Alfred Hitchcock
26,tt0091042,2016-09-09,2016-09-09,,Ferris Bueller's Day Off,https://www.imdb.com/title/tt0091042/,movie,7.8,103,1986,Comedy,374269,1986-06-11,John Hughes
27,tt1375666,2016-09-10,2016-09-10,,Inception,https://www.imdb.com/title/tt1375666/,movie,8.8,148,2010,"Action, Adventure, Sci-Fi, Thriller",2455683,2010-07-08,Christopher Nolan
28,tt0139654,2016-09-12,2016-09-12,,Training Day,https://www.imdb.com/title/tt0139654/,movie,7.7,122,2001,"Action, Crime, Drama, Thriller",455198,2001-09-02,Antoine Fuqua
29,tt0265666,2016-09-13,2016-09-13,,The Royal Tenenbaums,https://www.imdb.com/title/tt0265666/,movie,7.6,110,2001,"Comedy, Drama",305267,2001-10-05,Wes Anderson
30,tt0114369,2016-09-14,2016-09-14,,Se7en,https://www.imdb.com/title/tt0114369/,movie,8.6,127,1995,"Crime, Drama, Mystery, Thriller",1724513,1995-09-15,David Fincher
31,tt0107048,2016-09-15,2016-09-15,,Groundhog Day,https://www.imdb.com/title/tt0107048/,movie,8.0,101,1993,"Comedy, Drama, Fantasy, Romance",659254,1993-02-02,Harold Ramis
32,tt0208092,2016-09-15,2016-09-15,,Snatch,https://www.imdb.com/title/tt0208092/,movie,8.2,104,2000,"Comedy, Crime",883155,2000-08-23,Guy Ritchie
33,tt0094721,2016-09-16,2016-09-16,,Beetle Juice,https://www.imdb.com/title/tt0094721/,movie,7.5,92,1988,"Comedy, Fantasy",320041,1988-03-29,Tim Burton
34,tt0209144,2016-09-24,2016-09-24,,Memento,https://www.imdb.com/title/tt0209144/,movie,8.4,113,2000,"Mystery, Thriller",1281671,2000-09-05,Christopher Nolan
35,tt0338013,2016-09-27,2016-09-27,,Eternal Sunshine of the Spotless Mind,https://www.imdb.com/title/tt0338013/,movie,8.3,108,2004,"Drama, Romance, Sci-Fi",1042523,2004-03-09,Michel Gondry
36,tt0467406,2016-09-29,2016-09-29,,Juno,https://www.imdb.com/title/tt0467406/,movie,7.5,96,2007,"Comedy, Drama",538391,2007-09-01,Jason Reitman
37,tt0756683,2016-09-29,2016-09-29,,The Man from Earth,https://www.imdb.com/title/tt0756683/,movie,7.8,87,2007,"Drama, Fantasy, Mystery, Sci-Fi",194379,2007-06-10,Richard Schenkman
38,tt0110413,2016-09-29,2016-09-29,,Léon,https://www.imdb.com/title/tt0110413/,movie,8.5,110,1994,"Action, Crime, Drama, Thriller",1204214,1994-09-14,Luc Besson
39,tt0120669,2016-09-30,2016-09-30,,Fear and Loathing in Las Vegas,https://www.imdb.com/title/tt0120669/,movie,7.5,118,1998,"Adventure, Comedy, Drama",294272,1998-05-15,Terry Gilliam
40,tt0780504,2016-10-04,2016-10-04,,Drive,https://www.imdb.com/title/tt0780504/,movie,7.8,100,2011,"Action, Drama",677500,2011-05-20,Nicolas Winding Refn
41,tt0050083,2016-10-07,2016-10-07,,12 Angry Men,https://www.imdb.com/title/tt0050083/,movie,9.0,96,1957,"Crime, Drama",827513,1957-04-10,Sidney Lumet
42,tt0066921,2016-10-08,2016-10-08,,A Clockwork Orange,https://www.imdb.com/title/tt0066921/,movie,8.3,136,1971,"Crime, Sci-Fi",856669,1971-12-19,Stanley Kubrick
43,tt0105236,2016-10-09,2016-10-09,,Reservoir Dogs,https://www.imdb.com/title/tt0105236/,movie,8.3,99,1992,"Crime, Thriller",1055191,1992-01-21,Quentin Tarantino
44,tt0102926,2016-10-09,2016-10-09,,The Silence of the Lambs,https://www.imdb.com/title/tt0102926/,movie,8.6,118,1991,"Crime, Drama, Thriller",1486563,1991-01-30,Jonathan Demme
45,tt0317248,2016-10-14,2016-10-14,,Cidade de Deus,https://www.imdb.com/title/tt0317248/,movie,8.6,130,2002,"Crime, Drama",778894,2002-05-18,"Kátia Lund, Fernando Meirelles"
46,tt0289765,2016-10-15,2016-10-15,,Red Dragon,https://www.imdb.com/title/tt0289765/,movie,7.2,124,2002,"Crime, Drama, Thriller",283719,2002-09-30,Brett Ratner
47,tt1216491,2016-10-15,2016-10-15,,Kill the Messenger,https://www.imdb.com/title/tt1216491/,movie,6.9,112,2014,"Biography, Crime, Drama, Mystery, Thriller",48058,2014-09-28,Michael Cuesta
48,tt0081505,2016-10-15,2016-10-15,,The Shining,https://www.imdb.com/title/tt0081505/,movie,8.4,146,1980,"Drama, Horror",1064133,1980-05-23,Stanley Kubrick
49,tt1242460,2016-10-17,2016-10-17,,We Need to Talk About Kevin,https://www.imdb.com/title/tt1242460/,movie,7.5,112,2011,"Drama, Mystery, Thriller",162601,2011-05-12,Lynne Ramsay
50,tt0086250,2016-10-19,2016-10-19,,Scarface,https://www.imdb.com/title/tt0086250/,movie,8.3,170,1983,"Crime, Drama",879957,1983-12-01,Brian De Palma
51,tt0071853,2016-10-19,2016-10-19,,Monty Python and the Holy Grail,https://www.imdb.com/title/tt0071853/,movie,8.2,91,1975,"Adventure, Comedy, Fantasy",556778,1975-03-14,"Terry Jones, Terry Gilliam"
52,tt0144084,2016-10-19,2016-10-19,,American Psycho,https://www.imdb.com/title/tt0144084/,movie,7.6,102,2000,"Crime, Drama, Horror",671525,2000-01-21,Mary Harron
53,tt1670345,2016-11-08,2016-11-08,,Now You See Me,https://www.imdb.com/title/tt1670345/,movie,7.2,115,2013,"Crime, Mystery, Thriller",686031,2013-05-21,Louis Leterrier
54,tt1600196,2016-11-09,2016-11-09,,The Drop,https://www.imdb.com/title/tt1600196/,movie,7.0,106,2014,"Crime, Drama, Thriller",158031,2014-09-05,Michaël R. Roskam
55,tt4034354,2016-11-09,2016-11-09,,Swiss Army Man,https://www.imdb.com/title/tt4034354/,movie,6.9,97,2016,"Comedy, Drama, Fantasy, Romance",129598,2016-01-22,"Daniel Kwan, Daniel Scheinert"
56,tt0118715,2016-11-12,2016-11-12,,The Big Lebowski,https://www.imdb.com/title/tt0118715/,movie,8.1,117,1998,"Comedy, Crime",835476,1998-01-18,"Ethan Coen, Joel Coen"
57,tt0113568,2016-11-16,2016-11-16,,Kôkaku kidôtai,https://www.imdb.com/title/tt0113568/,movie,7.9,83,1995,"Animation, Action, Crime, Drama, Mystery, Sci-Fi, Thriller",150499,1995-09-23,Mamoru Oshii
58,tt0094625,2016-11-17,2016-11-17,,Akira,https://www.imdb.com/title/tt0094625/,movie,8.0,124,1988,"Animation, Action, Drama, Fantasy, Sci-Fi, Thriller",196614,1988-07-16,Katsuhiro Ôtomo
59,tt0449059,2016-11-17,2016-11-17,,Little Miss Sunshine,https://www.imdb.com/title/tt0449059/,movie,7.8,101,2006,"Comedy, Drama",502048,2006-01-20,"Jonathan Dayton, Valerie Faris"
60,tt1853728,2016-11-19,2016-11-19,,Django Unchained,https://www.imdb.com/title/tt1853728/,movie,8.4,165,2012,"Drama, Western",1626180,2012-12-11,Quentin Tarantino
61,tt1663202,2016-11-20,2016-11-20,,The Revenant,https://www.imdb.com/title/tt1663202/,movie,8.0,156,2015,"Action, Adventure, Drama, Western",839879,2015-12-16,Alejandro G. Iñárritu
62,tt3488710,2016-11-21,2016-11-21,,The Walk,https://www.imdb.com/title/tt3488710/,movie,7.3,123,2015,"Adventure, Biography, Drama, History",132710,2015-09-26,Robert Zemeckis
63,tt0887883,2016-11-21,2016-11-21,,Burn After Reading,https://www.imdb.com/title/tt0887883/,movie,7.0,96,2008,"Comedy, Crime, Drama, Thriller",343993,2008-08-27,"Ethan Coen, Joel Coen"
64,tt0241527,2016-11-21,2016-11-21,,Harry Potter and the Sorcerer's Stone,https://www.imdb.com/title/tt0241527/,movie,7.6,152,2001,"Adventure, Family, Fantasy",820745,2001-11-04,Chris Columbus
65,tt0120601,2016-11-22,2016-11-22,,Being John Malkovich,https://www.imdb.com/title/tt0120601/,movie,7.7,113,1999,"Comedy, Drama, Fantasy",346296,1999-09-02,Spike Jonze
66,tt0295297,2016-11-24,2016-11-24,,Harry Potter and the Chamber of Secrets,https://www.imdb.com/title/tt0295297/,movie,7.4,161,2002,"Adventure, Family, Fantasy, Mystery",665128,2002-11-03,Chris Columbus
67,tt0093058,2016-11-24,2016-11-24,,Full Metal Jacket,https://www.imdb.com/title/tt0093058/,movie,8.3,116,1987,"Drama, War",767259,1987-06-17,Stanley Kubrick
68,tt0304141,2016-11-25,2016-11-25,,Harry Potter and the Prisoner of Azkaban,https://www.imdb.com/title/tt0304141/,movie,7.9,142,2004,"Adventure, Family, Fantasy, Mystery",664147,2004-05-23,Alfonso Cuarón
69,tt0330373,2016-11-28,2016-11-28,,Harry Potter and the Goblet of Fire,https://www.imdb.com/title/tt0330373/,movie,7.7,157,2005,"Adventure, Family, Fantasy, Mystery",655118,2005-11-06,Mike Newell
70,tt0373889,2016-11-29,2016-11-29,,Harry Potter and the Order of the Phoenix,https://www.imdb.com/title/tt0373889/,movie,7.5,138,2007,"Action, Adventure, Family, Fantasy, Mystery",608947,2007-06-28,David Yates
71,tt0417741,2016-11-30,2016-11-30,,Harry Potter and the Half-Blood Prince,https://www.imdb.com/title/tt0417741/,movie,7.6,153,2009,"Action, Adventure, Family, Fantasy, Mystery",571816,2009-07-06,David Yates
72,tt0926084,2016-12-02,2016-12-02,,Harry Potter and the Deathly Hallows: Part 1,https://www.imdb.com/title/tt0926084/,movie,7.7,146,2010,"Adventure, Family, Fantasy, Mystery",575491,2010-11-11,David Yates
73,tt1201607,2016-12-02,2016-12-02,,Harry Potter and the Deathly Hallows: Part 2,https://www.imdb.com/title/tt1201607/,movie,8.1,130,2011,"Adventure, Family, Fantasy, Mystery",913221,2011-07-07,David Yates
74,tt0245844,2016-12-12,2016-12-12,,The Count of Monte Cristo,https://www.imdb.com/title/tt0245844/,movie,7.7,131,2002,"Action, Adventure, Drama, Thriller",144453,2002-01-23,Kevin Reynolds
75,tt0211915,2016-12-12,2016-12-12,,Le fabuleux destin d'Amélie Poulain,https://www.imdb.com/title/tt0211915/,movie,8.3,122,2001,"Comedy, Romance",775920,2001-04-25,Jean-Pierre Jeunet
76,tt0790636,2016-12-13,2016-12-13,,Dallas Buyers Club,https://www.imdb.com/title/tt0790636/,movie,7.9,117,2013,"Biography, Drama",505513,2013-09-07,Jean-Marc Vallée
77,tt1022603,2016-12-14,2016-12-14,,(500) Days of Summer,https://www.imdb.com/title/tt1022603/,movie,7.7,95,2009,"Comedy, Drama, Romance",537644,2009-01-17,Marc Webb
78,tt1748122,2016-12-15,2016-12-15,,Moonrise Kingdom,https://www.imdb.com/title/tt1748122/,movie,7.8,94,2012,"Comedy, Drama, Family, Romance",360616,2012-05-16,Wes Anderson
79,tt4257858,2016-12-15,2016-12-15,,Going Clear: Scientology & the Prison of Belief,https://www.imdb.com/title/tt4257858/,movie,8.0,119,2015,Documentary,40285,2015-01-25,Alex Gibney
80,tt0083658,2016-12-19,2016-12-19,,Blade Runner,https://www.imdb.com/title/tt0083658/,movie,8.1,117,1982,"Action, Drama, Sci-Fi, Thriller",797469,1982-06-25,Ridley Scott
81,tt1440292,2016-12-21,2016-12-21,,Submarine,https://www.imdb.com/title/tt1440292/,movie,7.3,97,2010,"Comedy, Drama, Romance",94237,2010-09-12,Richard Ayoade
82,tt0052357,2016-12-21,2016-12-21,,Vertigo,https://www.imdb.com/title/tt0052357/,movie,8.3,128,1958,"Mystery, Romance, Thriller",415031,1958-05-09,Alfred Hitchcock
83,tt0432283,2016-12-22,2016-12-22,,Fantastic Mr. Fox,https://www.imdb.com/title/tt0432283/,movie,7.9,87,2009,"Animation, Adventure, Comedy, Crime, Drama, Family",254200,2009-10-14,Wes Anderson
84,tt3544112,2016-12-22,2016-12-22,,Sing Street,https://www.imdb.com/title/tt3544112/,movie,7.9,106,2016,"Comedy, Drama, Music, Romance",98113,2016-01-24,John Carney
85,tt0093773,2016-12-22,2016-12-22,,Predator,https://www.imdb.com/title/tt0093773/,movie,7.8,107,1987,"Action, Adventure, Horror, Sci-Fi",439459,1987-06-12,John McTiernan
86,tt0259711,2016-12-24,2016-12-24,,Vanilla Sky,https://www.imdb.com/title/tt0259711/,movie,6.9,136,2001,"Fantasy, Mystery, Romance, Sci-Fi, Thriller",279023,2001-12-10,Cameron Crowe
87,tt0095016,2016-12-25,2016-12-25,,Die Hard,https://www.imdb.com/title/tt0095016/,movie,8.2,132,1988,"Action, Thriller",909803,1988-07-12,John McTiernan
88,tt0361862,2016-12-26,2016-12-26,,The Machinist,https://www.imdb.com/title/tt0361862/,movie,7.6,101,2004,"Drama, Thriller",405073,2004-01-18,Brad Anderson
89,tt0099685,2016-12-26,2016-12-26,,Goodfellas,https://www.imdb.com/title/tt0099685/,movie,8.7,145,1990,"Biography, Crime, Drama",1209088,1990-09-09,Martin Scorsese
90,tt0169547,2016-12-27,2016-12-27,,American Beauty,https://www.imdb.com/title/tt0169547/,movie,8.3,122,1999,Drama,1182636,1999-09-08,Sam Mendes
1,tt1650062,2017-01-23,2017-01-23,,Super 8,https://www.imdb.com/title/tt1650062/,movie,7.0,112,2011,"Action, Mystery, Sci-Fi, Thriller",362681,2011-06-09,J.J. Abrams
2,tt3553976,2017-01-25,2017-01-25,,Captain Fantastic,https://www.imdb.com/title/tt3553976/,movie,7.8,118,2016,"Comedy, Drama",227871,2016-01-23,Matt Ross
3,tt3783958,2017-01-28,2017-01-28,,La La Land,https://www.imdb.com/title/tt3783958/,movie,8.0,128,2016,"Comedy, Drama, Music, Musical, Romance",629264,2016-08-31,Damien Chazelle
4,tt2543164,2017-01-29,2017-01-29,,Arrival,https://www.imdb.com/title/tt2543164/,movie,7.9,116,2016,"Drama, Mystery, Sci-Fi",731353,2016-09-01,Denis Villeneuve
5,tt4034228,2017-02-01,2017-02-01,,Manchester by the Sea,https://www.imdb.com/title/tt4034228/,movie,7.8,137,2016,Drama,298257,2016-01-23,Kenneth Lonergan
6,tt0264464,2017-02-02,2017-02-02,,Catch Me If You Can,https://www.imdb.com/title/tt0264464/,movie,8.1,141,2002,"Biography, Crime, Drama",1041649,2002-12-16,Steven Spielberg
7,tt1211837,2017-02-04,2017-02-04,,Doctor Strange,https://www.imdb.com/title/tt1211837/,movie,7.5,115,2016,"Action, Adventure, Fantasy, Sci-Fi",776857,2016-10-13,Scott Derrickson
8,tt2140479,2017-02-05,2017-02-05,,The Accountant,https://www.imdb.com/title/tt2140479/,movie,7.3,128,2016,"Action, Thriller",308474,2016-10-03,Gavin O'Connor
9,tt1895587,2017-02-08,2017-02-08,,Spotlight,https://www.imdb.com/title/tt1895587/,movie,8.1,129,2015,"Biography, Crime, Drama",487549,2015-09-03,Tom McCarthy
10,tt2119532,2017-02-09,2017-02-09,,Hacksaw Ridge,https://www.imdb.com/title/tt2119532/,movie,8.1,139,2016,"Biography, Drama, History, War",562426,2016-09-04,Mel Gibson
11,tt0861739,2017-02-13,2017-02-13,,Tropa de Elite,https://www.imdb.com/title/tt0861739/,movie,8.0,115,2007,"Action, Crime, Drama, Thriller",107529,2007-08-17,José Padilha
12,tt1392214,2017-02-14,2017-02-14,,Prisoners,https://www.imdb.com/title/tt1392214/,movie,8.1,153,2013,"Crime, Drama, Mystery, Thriller",764372,2013-08-30,Denis Villeneuve
13,tt0116282,2017-02-15,2017-02-15,,Fargo,https://www.imdb.com/title/tt0116282/,movie,8.1,98,1996,"Crime, Thriller",700034,1996-03-08,"Joel Coen, Ethan Coen"
14,tt4975722,2017-02-16,2017-02-16,,Moonlight,https://www.imdb.com/title/tt4975722/,movie,7.4,111,2016,Drama,321748,2016-09-02,Barry Jenkins
15,tt3464902,2017-02-16,2017-02-16,,The Lobster,https://www.imdb.com/title/tt3464902/,movie,7.1,119,2015,"Drama, Romance, Sci-Fi, Thriller",274245,2015-05-15,Yorgos Lanthimos
16,tt4550098,2017-02-17,2017-02-17,,Nocturnal Animals,https://www.imdb.com/title/tt4550098/,movie,7.5,116,2016,"Drama, Thriller",293177,2016-09-02,Tom Ford
17,tt3741834,2017-02-18,2017-02-18,,Lion,https://www.imdb.com/title/tt3741834/,movie,8.0,118,2016,"Biography, Drama",244436,2016-09-10,Garth Davis
18,tt2582782,2017-02-21,2017-02-21,,Hell or High Water,https://www.imdb.com/title/tt2582782/,movie,7.6,102,2016,"Crime, Drama, Thriller, Western",241811,2016-05-16,David Mackenzie
19,tt2278388,2017-02-21,2017-02-21,,The Grand Budapest Hotel,https://www.imdb.com/title/tt2278388/,movie,8.1,99,2014,"Adventure, Comedy, Crime",853439,2014-02-06,Wes Anderson
20,tt2267998,2017-02-23,2017-02-23,,Gone Girl,https://www.imdb.com/title/tt2267998/,movie,8.1,149,2014,"Drama, Mystery, Thriller",1023923,2014-09-26,David Fincher
21,tt0120737,2017-02-23,2017-02-23,,The Lord of the Rings: The Fellowship of the Ring,https://www.imdb.com/title/tt0120737/,movie,8.8,178,2001,"Action, Adventure, Drama, Fantasy",1937477,2001-12-10,Peter Jackson
22,tt0167261,2017-02-24,2017-02-24,,The Lord of the Rings: The Two Towers,https://www.imdb.com/title/tt0167261/,movie,8.8,179,2002,"Action, Adventure, Drama, Fantasy",1722889,2002-12-05,Peter Jackson
23,tt0167260,2017-02-24,2017-02-24,,The Lord of the Rings: The Return of the King,https://www.imdb.com/title/tt0167260/,movie,9.0,201,2003,"Action, Adventure, Drama, Fantasy",1909292,2003-12-01,Peter Jackson
24,tt0172493,2017-02-25,2017-02-25,,"Girl, Interrupted",https://www.imdb.com/title/tt0172493/,movie,7.3,127,1999,"Biography, Drama",200842,1999-12-08,James Mangold
25,tt2316411,2017-02-25,2017-02-25,,Enemy,https://www.imdb.com/title/tt2316411/,movie,6.9,91,2013,"Drama, Mystery, Thriller",205434,2013-09-08,Denis Villeneuve
26,tt1259521,2017-03-01,2017-03-01,,The Cabin in the Woods,https://www.imdb.com/title/tt1259521/,movie,7.0,95,2011,"Horror, Mystery, Thriller",435518,2011-12-11,Drew Goddard
27,tt3385516,2017-03-05,2017-03-05,,X-Men: Apocalypse,https://www.imdb.com/title/tt3385516/,movie,6.9,144,2016,"Action, Adventure, Sci-Fi",450075,2016-05-09,Bryan Singer
28,tt1355644,2017-03-05,2017-03-05,,Passengers,https://www.imdb.com/title/tt1355644/,movie,7.0,116,2016,"Drama, Romance, Sci-Fi, Thriller",427644,2016-12-14,Morten Tyldum
29,tt3922798,2017-04-07,2017-04-07,,The Siege of Jadotville,https://www.imdb.com/title/tt3922798/,movie,7.2,108,2016,"Action, Drama, History, Thriller, War",42526,2016-07-10,Richie Smyth
30,tt4972582,2017-04-09,2017-04-09,,Split,https://www.imdb.com/title/tt4972582/,movie,7.3,117,2016,"Horror, Thriller",525915,2016-09-26,M. Night Shyamalan
31,tt1446714,2017-05-11,2017-05-11,,Prometheus,https://www.imdb.com/title/tt1446714/,movie,7.0,124,2012,"Adventure, Mystery, Sci-Fi",626919,2012-04-11,Ridley Scott
32,tt3315342,2017-05-27,2017-05-27,,Logan,https://www.imdb.com/title/tt3315342/,movie,8.1,137,2017,"Action, Drama, Sci-Fi, Thriller",800039,2017-02-17,James Mangold
33,tt3183660,2017-05-30,2017-05-30,,Fantastic Beasts and Where to Find Them,https://www.imdb.com/title/tt3183660/,movie,7.2,132,2016,"Adventure, Family, Fantasy",493061,2016-11-08,David Yates
34,tt5052448,2017-06-21,2017-06-21,,Get Out,https://www.imdb.com/title/tt5052448/,movie,7.8,104,2017,"Horror, Mystery, Thriller",652138,2017-01-23,Jordan Peele
35,tt3774114,2017-06-21,2017-06-21,,Snowden,https://www.imdb.com/title/tt3774114/,movie,7.3,134,2016,"Biography, Crime, Drama, Thriller",158526,2016-07-21,Oliver Stone
36,tt4044364,2017-07-24,2017-07-24,,Citizenfour,https://www.imdb.com/title/tt4044364/,movie,8.0,114,2014,"Documentary, Biography",57053,2014-10-10,Laura Poitras
37,tt0319061,2017-07-24,2017-07-24,,Big Fish,https://www.imdb.com/title/tt0319061/,movie,8.0,125,2003,"Adventure, Drama, Fantasy, Romance",450716,2003-12-04,Tim Burton
38,tt0111161,2017-07-24,2017-07-24,,The Shawshank Redemption,https://www.imdb.com/title/tt0111161/,movie,9.3,142,1994,Drama,2786619,1994-09-10,Frank Darabont
39,tt5442430,2017-07-24,2017-07-24,,Life,https://www.imdb.com/title/tt5442430/,movie,6.6,104,2017,"Horror, Sci-Fi, Thriller",243138,2017-03-18,Daniel Espinosa
40,tt1219289,2017-07-24,2017-07-24,,Limitless,https://www.imdb.com/title/tt1219289/,movie,7.4,105,2011,"Sci-Fi, Thriller",595295,2011-03-08,Neil Burger
41,tt4160708,2017-07-24,2017-07-24,,Don't Breathe,https://www.imdb.com/title/tt4160708/,movie,7.1,88,2016,"Crime, Horror, Thriller",289799,2016-03-12,Fede Alvarez
42,tt0451279,2017-07-24,2017-07-24,,Wonder Woman,https://www.imdb.com/title/tt0451279/,movie,7.4,141,2017,"Action, Adventure, Fantasy, Sci-Fi, War",681712,2017-05-15,Patty Jenkins
43,tt2763304,2017-07-27,2017-07-27,,T2 Trainspotting,https://www.imdb.com/title/tt2763304/,movie,7.2,117,2017,"Comedy, Crime, Drama",129607,2017-01-22,Danny Boyle
44,tt0482571,2017-08-06,2017-08-06,,The Prestige,https://www.imdb.com/title/tt0482571/,movie,8.5,130,2006,"Drama, Mystery, Sci-Fi, Thriller",1388929,2006-10-17,Christopher Nolan
45,tt1798709,2017-08-07,2017-08-07,,Her,https://www.imdb.com/title/tt1798709/,movie,8.0,126,2013,"Drama, Romance, Sci-Fi",644584,2013-10-12,Spike Jonze
46,tt1536537,2017-08-22,2017-08-22,,What Happened to Monday,https://www.imdb.com/title/tt1536537/,movie,6.8,123,2017,"Action, Crime, Fantasy, Mystery, Sci-Fi, Thriller",129909,2017-08-05,Tommy Wirkola
47,tt3896198,2017-08-22,2017-08-22,,Guardians of the Galaxy Vol. 2,https://www.imdb.com/title/tt3896198/,movie,7.6,136,2017,"Action, Adventure, Comedy, Sci-Fi",731526,2017-04-10,James Gunn
48,tt5221584,2017-08-22,2017-08-22,,Aquarius,https://www.imdb.com/title/tt5221584/,movie,7.4,146,2016,Drama,20371,2016-05-17,Kleber Mendonça Filho
49,tt0054215,2017-08-22,2017-08-22,,Psycho,https://www.imdb.com/title/tt0054215/,movie,8.5,109,1960,"Horror, Mystery, Thriller",695735,1960-06-16,Alfred Hitchcock
50,tt0947798,2017-08-23,2017-08-23,,Black Swan,https://www.imdb.com/title/tt0947798/,movie,8.0,108,2010,"Drama, Thriller",796949,2010-09-01,Darren Aronofsky
51,tt2872718,2017-08-27,2017-08-27,,Nightcrawler,https://www.imdb.com/title/tt2872718/,movie,7.8,117,2014,"Crime, Drama, Thriller",579491,2014-09-05,Dan Gilroy
52,tt0088846,2017-09-01,2017-09-01,,Brazil,https://www.imdb.com/title/tt0088846/,movie,7.9,132,1985,"Drama, Sci-Fi, Thriller",206687,1985-02-20,Terry Gilliam
53,tt0180093,2017-09-04,2017-09-04,,Requiem for a Dream,https://www.imdb.com/title/tt0180093/,movie,8.3,102,2000,Drama,871364,2000-05-14,Darren Aronofsky
54,tt0414387,2017-09-05,2017-09-05,,Pride & Prejudice,https://www.imdb.com/title/tt0414387/,movie,7.8,129,2005,"Drama, Romance",314557,2005-07-25,Joe Wright
55,tt0120735,2017-09-09,2017-09-09,,"Lock, Stock and Two Smoking Barrels",https://www.imdb.com/title/tt0120735/,movie,8.1,107,1998,"Action, Comedy, Crime",600553,1998-08-23,Guy Ritchie
56,tt4857264,2017-09-09,2017-09-09,,Contratiempo,https://www.imdb.com/title/tt4857264/,movie,8.0,106,2016,"Crime, Drama, Mystery, Thriller",185459,2016-09-23,Oriol Paulo
57,tt2866360,2017-09-09,2017-09-09,,Coherence,https://www.imdb.com/title/tt2866360/,movie,7.2,89,2013,"Drama, Mystery, Sci-Fi, Thriller",138911,2013-09-19,James Ward Byrkit
58,tt5311514,2017-09-10,2017-09-10,,Kimi no na wa.,https://www.imdb.com/title/tt5311514/,movie,8.4,106,2016,"Animation, Drama, Fantasy, Romance",296048,2016-07-03,Makoto Shinkai
59,tt0120382,2017-09-10,2017-09-10,,The Truman Show,https://www.imdb.com/title/tt0120382/,movie,8.2,103,1998,"Comedy, Drama",1138854,1998-06-01,Peter Weir
60,tt0407887,2017-09-11,2017-09-11,,The Departed,https://www.imdb.com/title/tt0407887/,movie,8.5,151,2006,"Crime, Drama, Thriller",1374027,2006-09-26,Martin Scorsese
61,tt0309987,2017-09-12,2017-09-12,,The Dreamers,https://www.imdb.com/title/tt0309987/,movie,7.1,115,2003,"Drama, Romance",127336,2003-09-01,Bernardo Bertolucci
62,tt0079470,2017-09-12,2017-09-12,,Life of Brian,https://www.imdb.com/title/tt0079470/,movie,8.0,94,1979,Comedy,412985,1979-08-17,Terry Jones
63,tt2106476,2017-09-13,2017-09-13,,Jagten,https://www.imdb.com/title/tt2106476/,movie,8.3,115,2012,Drama,347380,2012-05-20,Thomas Vinterberg
64,tt0373469,2017-09-13,2017-09-13,,Kiss Kiss Bang Bang,https://www.imdb.com/title/tt0373469/,movie,7.5,103,2005,"Comedy, Crime, Mystery, Thriller",232949,2005-05-14,Shane Black
65,tt3235888,2017-09-14,2017-09-14,,It Follows,https://www.imdb.com/title/tt3235888/,movie,6.8,100,2014,"Horror, Mystery, Thriller",256448,2014-05-17,David Robert Mitchell
66,tt0037469,2017-09-16,2017-09-16,,The Woman in the Window,https://www.imdb.com/title/tt0037469/,movie,7.6,107,1944,"Crime, Drama, Film-Noir, Mystery, Thriller",17154,1944-10-25,Fritz Lang
67,tt1790809,2017-09-17,2017-09-17,,Pirates of the Caribbean: Dead Men Tell No Tales,https://www.imdb.com/title/tt1790809/,movie,6.5,129,2017,"Action, Adventure, Fantasy",330352,2017-05-11,"Espen Sandberg, Joachim Rønning"
68,tt1024648,2017-09-17,2017-09-17,,Argo,https://www.imdb.com/title/tt1024648/,movie,7.7,120,2012,"Biography, Drama, Thriller",628609,2012-08-31,Ben Affleck
69,tt0110912,2017-09-19,2017-09-19,,Pulp Fiction,https://www.imdb.com/title/tt0110912/,movie,8.9,154,1994,"Crime, Drama",2137773,1994-05-21,Quentin Tarantino
70,tt0062622,2017-09-20,2017-09-20,,2001: A Space Odyssey,https://www.imdb.com/title/tt0062622/,movie,8.3,149,1968,"Adventure, Sci-Fi",694640,1968-04-02,Stanley Kubrick
71,tt0490215,2017-09-21,2017-09-21,,Silence,https://www.imdb.com/title/tt0490215/,movie,7.2,161,2016,"Drama, History",117893,2016-11-29,Martin Scorsese
72,tt0409459,2017-09-22,2017-09-22,,Watchmen,https://www.imdb.com/title/tt0409459/,movie,7.6,162,2009,"Action, Drama, Mystery, Sci-Fi",567962,2009-02-23,Zack Snyder
73,tt3890160,2017-09-23,2017-09-23,,Baby Driver,https://www.imdb.com/title/tt3890160/,movie,7.6,113,2017,"Action, Crime, Drama, Music",578453,2017-03-11,Edgar Wright
74,tt0477348,2017-10-03,2017-10-03,,No Country for Old Men,https://www.imdb.com/title/tt0477348/,movie,8.2,122,2007,"Crime, Drama, Thriller",1017500,2007-05-19,"Joel Coen, Ethan Coen"
75,tt1285016,2017-10-04,2017-10-04,,The Social Network,https://www.imdb.com/title/tt1285016/,movie,7.8,120,2010,"Biography, Drama",732528,2010-09-24,David Fincher
76,tt1568346,2017-10-04,2017-10-04,,The Girl with the Dragon Tattoo,https://www.imdb.com/title/tt1568346/,movie,7.8,158,2011,"Crime, Drama, Mystery, Thriller",479260,2011-12-12,David Fincher
77,tt1130884,2017-10-08,2017-10-08,,Shutter Island,https://www.imdb.com/title/tt1130884/,movie,8.2,138,2010,"Mystery, Thriller",1387088,2010-02-13,Martin Scorsese
78,tt0470752,2017-10-08,2017-10-08,,Ex Machina,https://www.imdb.com/title/tt0470752/,movie,7.7,108,2014,"Drama, Sci-Fi, Thriller",567370,2014-12-16,Alex Garland
79,tt0088930,2017-10-09,2017-10-09,,Clue,https://www.imdb.com/title/tt0088930/,movie,7.2,94,1985,"Comedy, Crime, Mystery, Thriller",103938,1985-12-13,Jonathan Lynn
80,tt0276919,2017-10-09,2017-10-09,,Dogville,https://www.imdb.com/title/tt0276919/,movie,8.0,178,2003,"Crime, Drama",154455,2003-05-19,Lars von Trier
81,tt0053198,2017-10-10,2017-10-10,,Les quatre cents coups,https://www.imdb.com/title/tt0053198/,movie,8.1,99,1959,"Crime, Drama",123749,1959-05-04,François Truffaut
82,tt0075148,2017-10-11,2017-10-11,,Rocky,https://www.imdb.com/title/tt0075148/,movie,8.1,120,1976,"Drama, Sport",606931,1976-11-20,John G. Avildsen
83,tt0085959,2017-10-11,2017-10-11,,The Meaning of Life,https://www.imdb.com/title/tt0085959/,movie,7.5,107,1983,"Comedy, Musical",123249,1983-03-31,"Terry Jones, Terry Gilliam"
84,tt0469494,2017-10-17,2017-10-17,,There Will Be Blood,https://www.imdb.com/title/tt0469494/,movie,8.2,158,2007,Drama,615106,2007-09-27,Paul Thomas Anderson
85,tt0335266,2017-10-18,2017-10-18,,Lost in Translation,https://www.imdb.com/title/tt0335266/,movie,7.7,102,2003,"Comedy, Drama",471989,2003-08-29,Sofia Coppola
86,tt0443706,2017-10-19,2017-10-19,,Zodiac,https://www.imdb.com/title/tt0443706/,movie,7.7,157,2007,"Crime, Drama, Mystery, Thriller",571565,2007-02-28,David Fincher
87,tt0108052,2017-10-20,2017-10-20,,Schindler's List,https://www.imdb.com/title/tt0108052/,movie,9.0,195,1993,"Biography, Drama, History",1401847,1993-11-30,Steven Spielberg
88,tt6214928,2017-10-30,2017-10-30,,1922,https://www.imdb.com/title/tt6214928/,movie,6.2,102,2017,"Crime, Drama, Horror, Mystery, Thriller",68608,2017-09-23,Zak Hilditch
89,tt0084787,2017-10-30,2017-10-30,,The Thing,https://www.imdb.com/title/tt0084787/,movie,8.2,109,1982,"Horror, Mystery, Sci-Fi",445030,1982-06-25,John Carpenter
90,tt0060196,2017-10-30,2017-10-30,,"Il buono, il brutto, il cattivo",https://www.imdb.com/title/tt0060196/,movie,8.8,161,1966,"Adventure, Western",786346,1966-12-23,Sergio Leone
91,tt1396484,2017-11-02,2017-11-02,,It,https://www.imdb.com/title/tt1396484/,movie,7.3,135,2017,Horror,578653,2017-09-05,Andy Muschietti
92,tt0073486,2017-11-04,2017-11-04,,One Flew Over the Cuckoo's Nest,https://www.imdb.com/title/tt0073486/,movie,8.7,133,1975,Drama,1039897,1975-11-19,Milos Forman
93,tt2042568,2017-11-05,2017-11-05,,Inside Llewyn Davis,https://www.imdb.com/title/tt2042568/,movie,7.4,104,2013,"Drama, Music",159371,2013-05-19,"Joel Coen, Ethan Coen"
94,tt0070666,2017-11-07,2017-11-07,,Serpico,https://www.imdb.com/title/tt0070666/,movie,7.7,130,1973,"Biography, Crime, Drama, Thriller",129881,1973-12-05,Sidney Lumet
95,tt0181875,2017-11-11,2017-11-11,,Almost Famous,https://www.imdb.com/title/tt0181875/,movie,7.9,122,2000,"Adventure, Comedy, Drama, Music",286240,2000-09-08,Cameron Crowe
96,tt0364569,2017-11-12,2017-11-12,,Oldeuboi,https://www.imdb.com/title/tt0364569/,movie,8.4,120,2003,"Action, Drama, Mystery, Thriller",606163,2003-11-21,Park Chan-wook
97,tt0114814,2017-11-12,2017-11-12,,The Usual Suspects,https://www.imdb.com/title/tt0114814/,movie,8.5,106,1995,"Crime, Drama, Mystery, Thriller",1115117,1995-01-25,Bryan Singer
98,tt0047478,2017-11-13,2017-11-13,,Shichinin no samurai,https://www.imdb.com/title/tt0047478/,movie,8.6,207,1954,"Action, Drama",356620,1954-04-26,Akira Kurosawa
99,tt0038650,2017-11-18,2017-11-18,,It's a Wonderful Life,https://www.imdb.com/title/tt0038650/,movie,8.6,130,1946,"Drama, Family, Fantasy, Romance",477263,1946-12-20,Frank Capra
100,tt3758172,2017-11-19,2017-11-19,,Jungle,https://www.imdb.com/title/tt3758172/,movie,6.7,115,2017,"Action, Adventure, Biography, Drama, Thriller",60611,2017-08-03,Greg McLean
101,tt1189073,2017-11-24,2017-11-24,,La piel que habito,https://www.imdb.com/title/tt1189073/,movie,7.6,120,2011,"Drama, Horror, Mystery, Thriller",160241,2011-05-19,Pedro Almodóvar
102,tt0118799,2017-11-24,2017-11-24,,La vita è bella,https://www.imdb.com/title/tt0118799/,movie,8.6,116,1997,"Comedy, Drama, Romance, War",719530,1997-12-20,Roberto Benigni
103,tt7214762,2017-11-29,2017-11-29,,"Jim & Andy: The Great Beyond - Featuring a Very Special, Contractually Obligated Mention of Tony Clifton",https://www.imdb.com/title/tt7214762/,movie,7.6,94,2017,Documentary,27269,2017-09-05,Chris Smith
104,tt0120815,2017-11-30,2017-11-30,,Saving Private Ryan,https://www.imdb.com/title/tt0120815/,movie,8.6,169,1998,"Drama, War",1443328,1998-07-21,Steven Spielberg
105,tt0064116,2017-12-04,2017-12-04,,C'era una volta il West,https://www.imdb.com/title/tt0064116/,movie,8.5,165,1968,Western,340486,1968-12-20,Sergio Leone
106,tt0120689,2017-12-05,2017-12-05,,The Green Mile,https://www.imdb.com/title/tt0120689/,movie,8.6,189,1999,"Crime, Drama, Fantasy, Mystery",1354348,1999-12-06,Frank Darabont
107,tt0034583,2017-12-06,2017-12-06,,Casablanca,https://www.imdb.com/title/tt0034583/,movie,8.5,102,1942,"Drama, Romance, War",589848,1942-11-26,Michael Curtiz
108,tt0021749,2017-12-07,2017-12-07,,City Lights,https://www.imdb.com/title/tt0021749/,movie,8.5,87,1931,"Comedy, Drama, Romance",190640,1931-01-30,Charles Chaplin
109,tt5109784,2017-12-11,2017-12-11,,Mother!,https://www.imdb.com/title/tt5109784/,movie,6.6,121,2017,"Drama, Horror, Mystery",239475,2017-09-05,Darren Aronofsky
110,tt0047396,2017-12-11,2017-12-11,,Rear Window,https://www.imdb.com/title/tt0047396/,movie,8.5,112,1954,"Mystery, Thriller",507061,1954-08-01,Alfred Hitchcock
111,tt2400463,2017-12-11,2017-12-11,,The Invitation,https://www.imdb.com/title/tt2400463/,movie,6.6,100,2015,"Drama, Horror, Mystery, Thriller",115305,2015-03-13,Karyn Kusama
112,tt0027977,2017-12-11,2017-12-11,,Modern Times,https://www.imdb.com/title/tt0027977/,movie,8.5,87,1936,"Comedy, Drama, Romance",251400,1936-02-05,Charles Chaplin
113,tt0253474,2017-12-12,2017-12-12,,The Pianist,https://www.imdb.com/title/tt0253474/,movie,8.5,150,2002,"Biography, Drama, Music, War",872234,2002-05-24,Roman Polanski
114,tt5013056,2017-12-17,2017-12-17,,Dunkirk,https://www.imdb.com/title/tt5013056/,movie,7.8,106,2017,"Action, Drama, History, Thriller, War",706184,2017-07-13,Christopher Nolan
115,tt0078748,2017-12-18,2017-12-18,,Alien,https://www.imdb.com/title/tt0078748/,movie,8.5,117,1979,"Horror, Sci-Fi",915099,1979-05-25,Ridley Scott
116,tt1504320,2017-12-19,2017-12-19,,The King's Speech,https://www.imdb.com/title/tt1504320/,movie,8.0,118,2010,"Biography, Drama, History",695854,2010-09-06,Tom Hooper
117,tt0172495,2017-12-20,2017-12-20,,Gladiator,https://www.imdb.com/title/tt0172495/,movie,8.5,155,2000,"Action, Adventure, Drama",1555151,2000-05-01,Ridley Scott
118,tt0078788,2017-12-21,2017-12-21,,Apocalypse Now,https://www.imdb.com/title/tt0078788/,movie,8.4,147,1979,"Drama, Mystery, War",689370,1979-05-19,Francis Ford Coppola
119,tt0057012,2017-12-28,2017-12-28,,Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb,https://www.imdb.com/title/tt0057012/,movie,8.4,95,1964,"Comedy, War",505076,1964-01-29,Stanley Kubrick
120,tt0000417,2017-12-31,2017-12-31,,Le voyage dans la lune,https://www.imdb.com/title/tt0000417/,short,8.2,13,1902,"Short, Action, Adventure, Comedy, Fantasy, Sci-Fi",53195,1902-09-01,Georges Méliès
1,tt0246578,2018-01-01,2018-01-01,,Donnie Darko,https://www.imdb.com/title/tt0246578/,movie,8.0,113,2001,"Drama, Mystery, Sci-Fi, Thriller",827272,2001-01-19,Richard Kelly
2,tt0082971,2018-01-02,2018-01-02,,Raiders of the Lost Ark,https://www.imdb.com/title/tt0082971/,movie,8.4,115,1981,"Action, Adventure",1009214,1981-06-12,Steven Spielberg
3,tt0088763,2018-01-03,2018-01-03,,Back to the Future,https://www.imdb.com/title/tt0088763/,movie,8.5,116,1985,"Adventure, Comedy, Sci-Fi",1257506,1985-07-03,Robert Zemeckis
4,tt0092005,2018-01-04,2018-01-04,,Stand by Me,https://www.imdb.com/title/tt0092005/,movie,8.1,89,1986,"Adventure, Drama",423780,1986-08-06,Rob Reiner
5,tt1856101,2018-01-05,2018-01-05,,Blade Runner 2049,https://www.imdb.com/title/tt1856101/,movie,8.0,164,2017,"Action, Drama, Mystery, Sci-Fi, Thriller",619064,2017-10-03,Denis Villeneuve
6,tt2406566,2018-01-07,2018-01-07,,Atomic Blonde,https://www.imdb.com/title/tt2406566/,movie,6.7,115,2017,"Action, Thriller",201376,2017-03-12,David Leitch
7,tt5462602,2018-01-08,2018-01-08,,The Big Sick,https://www.imdb.com/title/tt5462602/,movie,7.5,120,2017,"Comedy, Drama, Romance",140342,2017-01-20,Michael Showalter
8,tt3262342,2018-01-11,2018-01-11,,Loving Vincent,https://www.imdb.com/title/tt3262342/,movie,7.8,94,2017,"Animation, Drama, Mystery",61164,2017-06-12,"Hugh Welchman, DK Welchman"
9,tt1615160,2018-01-12,2018-01-12,,The Foreigner,https://www.imdb.com/title/tt1615160/,movie,7.0,113,2017,"Action, Thriller",119543,2017-09-24,Martin Campbell
10,tt0095327,2018-01-12,2018-01-12,,Hotaru no haka,https://www.imdb.com/title/tt0095327/,movie,8.5,89,1988,"Animation, Drama, War",293415,1988-04-16,Isao Takahata
11,tt0162222,2018-01-12,2018-01-12,,Cast Away,https://www.imdb.com/title/tt0162222/,movie,7.8,143,2000,"Adventure, Drama, Romance",617265,2000-12-07,Robert Zemeckis
12,tt0190590,2018-01-15,2018-01-15,,"O Brother, Where Art Thou?",https://www.imdb.com/title/tt0190590/,movie,7.7,107,2000,"Adventure, Comedy, Crime, Music",322746,2000-05-13,"Ethan Coen, Joel Coen"
13,tt0116367,2018-01-18,2018-01-18,,From Dusk Till Dawn,https://www.imdb.com/title/tt0116367/,movie,7.2,108,1996,"Action, Crime, Horror",329103,1996-01-19,Robert Rodriguez
14,tt0829482,2018-01-22,2018-01-22,,Superbad,https://www.imdb.com/title/tt0829482/,movie,7.6,113,2007,Comedy,608852,2007-08-17,Greg Mottola
15,tt5027774,2018-01-28,2018-01-28,,"Three Billboards Outside Ebbing, Missouri",https://www.imdb.com/title/tt5027774/,movie,8.1,115,2017,"Comedy, Crime, Drama",533544,2017-09-04,Martin McDonagh
16,tt5580390,2018-01-28,2018-01-28,,The Shape of Water,https://www.imdb.com/title/tt5580390/,movie,7.3,123,2017,"Drama, Fantasy, Romance",435928,2017-08-31,Guillermo del Toro
17,tt5439796,2018-01-28,2018-01-28,,Logan Lucky,https://www.imdb.com/title/tt5439796/,movie,7.0,118,2017,"Action, Comedy, Crime, Drama",156816,2017-08-07,Steven Soderbergh
18,tt0119396,2018-01-28,2018-01-28,,Jackie Brown,https://www.imdb.com/title/tt0119396/,movie,7.5,154,1997,"Crime, Drama, Thriller",362564,1997-12-08,Quentin Tarantino
19,tt0112471,2018-01-31,2018-01-31,,Before Sunrise,https://www.imdb.com/title/tt0112471/,movie,8.1,101,1995,"Drama, Romance",325691,1995-01-19,Richard Linklater
20,tt1182345,2018-01-31,2018-01-31,,Moon,https://www.imdb.com/title/tt1182345/,movie,7.8,97,2009,"Drama, Mystery, Sci-Fi",369119,2009-01-23,Duncan Jones
21,tt1605717,2018-02-01,2018-02-01,,Frank,https://www.imdb.com/title/tt1605717/,movie,6.9,95,2014,"Comedy, Drama, Music",81106,2014-01-17,Lenny Abrahamson
22,tt1454029,2018-02-01,2018-02-01,,The Help,https://www.imdb.com/title/tt1454029/,movie,8.1,146,2011,Drama,477661,2011-08-09,Tate Taylor
23,tt1706620,2018-02-02,2018-02-02,,Snowpiercer,https://www.imdb.com/title/tt1706620/,movie,7.1,126,2013,"Action, Drama, Sci-Fi, Thriller",375851,2013-07-29,Bong Joon Ho
24,tt0088847,2018-02-04,2018-02-04,,The Breakfast Club,https://www.imdb.com/title/tt0088847/,movie,7.8,97,1985,"Comedy, Drama",421209,1985-02-07,John Hughes
25,tt2548396,2018-02-05,2018-02-05,,The Cloverfield Paradox,https://www.imdb.com/title/tt2548396/,movie,5.5,102,2018,"Action, Adventure, Horror, Sci-Fi, Thriller",109874,2018-02-04,Julius Onah
26,tt2380307,2018-02-17,2018-02-17,,Coco,https://www.imdb.com/title/tt2380307/,movie,8.4,105,2017,"Animation, Adventure, Drama, Family, Fantasy, Music, Mystery",549626,2017-10-20,"Adrian Molina, Lee Unkrich"
27,tt0095765,2018-02-20,2018-02-20,,Nuovo Cinema Paradiso,https://www.imdb.com/title/tt0095765/,movie,8.5,155,1988,"Drama, Romance",272360,1988-09-29,Giuseppe Tornatore
28,tt4925292,2018-02-20,2018-02-20,,Lady Bird,https://www.imdb.com/title/tt4925292/,movie,7.4,94,2017,"Comedy, Drama",311695,2017-09-01,Greta Gerwig
29,tt5726616,2018-02-21,2018-02-21,,Call Me by Your Name,https://www.imdb.com/title/tt5726616/,movie,7.8,132,2017,"Drama, Romance",295017,2017-01-22,Luca Guadagnino
30,tt0032553,2018-03-08,2018-03-08,,The Great Dictator,https://www.imdb.com/title/tt0032553/,movie,8.4,125,1940,"Comedy, Drama, War",231120,1940-10-15,Charles Chaplin
31,tt3402236,2018-03-18,2018-03-18,,Murder on the Orient Express,https://www.imdb.com/title/tt3402236/,movie,6.5,114,2017,"Crime, Drama, Mystery",272577,2017-11-03,Kenneth Branagh
32,tt3316948,2018-03-22,2018-03-22,,American Ultra,https://www.imdb.com/title/tt3316948/,movie,6.1,96,2015,"Action, Comedy",94384,2015-08-18,Nima Nourizadeh
33,tt2798920,2018-03-22,2018-03-22,,Annihilation,https://www.imdb.com/title/tt2798920/,movie,6.8,115,2018,"Adventure, Drama, Horror, Mystery, Sci-Fi, Thriller",346211,2018-02-13,Alex Garland
34,tt0043014,2018-03-24,2018-03-24,,Sunset Blvd.,https://www.imdb.com/title/tt0043014/,movie,8.4,110,1950,"Drama, Film-Noir",229550,1950-08-04,Billy Wilder
35,tt2366608,2018-04-02,2018-04-02,,Lost River,https://www.imdb.com/title/tt2366608/,movie,5.7,95,2014,"Drama, Fantasy, Mystery, Thriller",18769,2014-05-20,Ryan Gosling
36,tt0355702,2018-04-06,2018-04-06,,Lords of Dogtown,https://www.imdb.com/title/tt0355702/,movie,7.1,107,2005,"Biography, Drama, Sport",56928,2005-06-03,Catherine Hardwicke
37,tt0097165,2018-04-11,2018-04-11,,Dead Poets Society,https://www.imdb.com/title/tt0097165/,movie,8.1,128,1989,"Comedy, Drama",518689,1989-06-02,Peter Weir
38,tt0327056,2018-04-13,2018-04-13,,Mystic River,https://www.imdb.com/title/tt0327056/,movie,7.9,138,2003,"Crime, Drama, Mystery, Thriller",471681,2003-05-23,Clint Eastwood
39,tt0217869,2018-04-17,2018-04-17,,Unbreakable,https://www.imdb.com/title/tt0217869/,movie,7.3,106,2000,"Drama, Mystery, Sci-Fi, Thriller",431062,2000-11-14,M. Night Shyamalan
40,tt1028528,2018-04-20,2018-04-20,,Death Proof,https://www.imdb.com/title/tt1028528/,movie,7.0,127,2007,"Action, Thriller",304436,2007-05-22,Quentin Tarantino
41,tt0381681,2018-04-26,2018-04-26,,Before Sunset,https://www.imdb.com/title/tt0381681/,movie,8.1,80,2004,"Drama, Romance",277867,2004-02-10,Richard Linklater
42,tt1817273,2018-04-28,2018-04-28,,The Place Beyond the Pines,https://www.imdb.com/title/tt1817273/,movie,7.3,140,2012,"Crime, Drama, Thriller",280918,2012-09-07,Derek Cianfrance
43,tt0050825,2018-04-28,2018-04-28,,Paths of Glory,https://www.imdb.com/title/tt0050825/,movie,8.4,88,1957,"Drama, War",205028,1957-11-01,Stanley Kubrick
44,tt0119698,2018-05-01,2018-05-01,,Mononoke-hime,https://www.imdb.com/title/tt0119698/,movie,8.3,134,1997,"Animation, Action, Adventure, Fantasy",413428,1997-07-12,Hayao Miyazaki
45,tt1825683,2018-05-11,2018-05-11,,Black Panther,https://www.imdb.com/title/tt1825683/,movie,7.3,134,2018,"Action, Adventure, Sci-Fi",811986,2018-01-29,Ryan Coogler
46,tt0405094,2018-05-11,2018-05-11,,Das Leben der Anderen,https://www.imdb.com/title/tt0405094/,movie,8.4,137,2006,"Drama, Mystery, Thriller",400097,2006-03-15,Florian Henckel von Donnersmarck
47,tt3501632,2018-05-21,2018-05-21,,Thor: Ragnarok,https://www.imdb.com/title/tt3501632/,movie,7.9,130,2017,"Action, Adventure, Comedy, Fantasy, Sci-Fi",788316,2017-10-10,Taika Waititi
48,tt2250912,2018-05-21,2018-05-21,,Spider-Man: Homecoming,https://www.imdb.com/title/tt2250912/,movie,7.4,133,2017,"Action, Adventure, Sci-Fi",692364,2017-06-28,Jon Watts
49,tt6857988,2018-05-21,2018-05-21,,Je ne suis pas un homme facile,https://www.imdb.com/title/tt6857988/,movie,6.3,98,2018,"Comedy, Fantasy, Romance",15385,2018-04-13,Eléonore Pourriat
50,tt2528814,2018-05-21,2018-05-21,,God's Not Dead,https://www.imdb.com/title/tt2528814/,movie,4.6,113,2014,"Adventure, Comedy, Drama, Romance",44155,2014-03-21,Harold Cronk
51,tt4425200,2018-05-21,2018-05-21,,John Wick: Chapter 2,https://www.imdb.com/title/tt4425200/,movie,7.4,122,2017,"Action, Crime, Thriller",488463,2017-01-30,Chad Stahelski
52,tt2704998,2018-05-25,2018-05-25,,Game Night,https://www.imdb.com/title/tt2704998/,movie,6.9,100,2018,"Action, Adventure, Comedy, Crime, Thriller",247583,2018-02-15,"Jonathan Goldstein, John Francis Daley"
53,tt0101318,2018-05-25,2018-05-25,,Les amants du Pont-Neuf,https://www.imdb.com/title/tt0101318/,movie,7.6,125,1991,"Drama, Romance",14837,1991-10-16,Leos Carax
54,tt2194499,2018-05-26,2018-05-26,,About Time,https://www.imdb.com/title/tt2194499/,movie,7.8,123,2013,"Comedy, Drama, Fantasy, Romance, Sci-Fi",369848,2013-06-27,Richard Curtis
55,tt5580036,2018-05-27,2018-05-27,,"I, Tonya",https://www.imdb.com/title/tt5580036/,movie,7.5,119,2017,"Biography, Comedy, Drama, Sport",232285,2017-09-08,Craig Gillespie
56,tt0051201,2018-05-27,2018-05-27,,Witness for the Prosecution,https://www.imdb.com/title/tt0051201/,movie,8.4,116,1957,"Crime, Drama, Mystery, Thriller",131706,1957-12-17,Billy Wilder
57,tt0332452,2018-05-28,2018-05-28,,Troy,https://www.imdb.com/title/tt0332452/,movie,7.3,163,2004,Drama,553794,2004-05-09,Wolfgang Petersen
58,tt4178092,2018-05-31,2018-05-31,,The Gift,https://www.imdb.com/title/tt4178092/,movie,7.0,108,2015,"Drama, Mystery, Thriller",165927,2015-07-30,Joel Edgerton
59,tt0112641,2018-05-31,2018-05-31,,Casino,https://www.imdb.com/title/tt0112641/,movie,8.2,178,1995,"Crime, Drama",542737,1995-11-14,Martin Scorsese
60,tt0071315,2018-06-01,2018-06-01,,Chinatown,https://www.imdb.com/title/tt0071315/,movie,8.2,130,1974,"Drama, Mystery, Thriller",338455,1974-06-19,Roman Polanski
61,tt0092099,2018-06-02,2018-06-02,,Top Gun,https://www.imdb.com/title/tt0092099/,movie,6.9,109,1986,"Action, Drama",482115,1986-05-12,Tony Scott
62,tt0079116,2018-06-02,2018-06-02,,Escape from Alcatraz,https://www.imdb.com/title/tt0079116/,movie,7.6,112,1979,"Action, Biography, Crime, Drama, Thriller",143038,1979-06-22,Don Siegel
63,tt6644200,2018-06-15,2018-06-15,,A Quiet Place,https://www.imdb.com/title/tt6644200/,movie,7.5,90,2018,"Drama, Horror, Sci-Fi",558952,2018-03-09,John Krasinski
64,tt5104604,2018-06-25,2018-06-25,,Isle of Dogs,https://www.imdb.com/title/tt5104604/,movie,7.8,101,2018,"Animation, Adventure, Comedy, Drama, Sci-Fi",182080,2018-02-15,Wes Anderson
65,tt0147800,2018-06-28,2018-06-28,,10 Things I Hate About You,https://www.imdb.com/title/tt0147800/,movie,7.3,97,1999,"Comedy, Drama, Romance",364420,1999-03-31,Gil Junger
66,tt0033467,2018-06-29,2018-06-29,,Citizen Kane,https://www.imdb.com/title/tt0033467/,movie,8.3,119,1941,"Drama, Mystery",454770,1941-05-01,Orson Welles
67,tt0090605,2018-06-30,2018-06-30,,Aliens,https://www.imdb.com/title/tt0090605/,movie,8.4,137,1986,"Action, Adventure, Sci-Fi, Thriller",740453,1986-07-14,James Cameron
68,tt0910970,2018-07-01,2018-07-01,,WALL·E,https://www.imdb.com/title/tt0910970/,movie,8.4,98,2008,"Animation, Adventure, Family, Sci-Fi",1159085,2008-06-21,Andrew Stanton
69,tt2184339,2018-07-02,2018-07-02,,The Purge,https://www.imdb.com/title/tt2184339/,movie,5.7,85,2013,"Horror, Sci-Fi, Thriller",233002,2013-05-02,James DeMonaco
70,tt2039345,2018-07-02,2018-07-02,,Grand Piano,https://www.imdb.com/title/tt2039345/,movie,5.9,90,2013,"Drama, Music, Mystery, Thriller",19357,2013-09-20,Eugenio Mira
71,tt0091763,2018-07-09,2018-07-09,,Platoon,https://www.imdb.com/title/tt0091763/,movie,8.1,120,1986,"Drama, War",427234,1986-12-19,Oliver Stone
72,tt0362270,2018-07-12,2018-07-12,,The Life Aquatic with Steve Zissou,https://www.imdb.com/title/tt0362270/,movie,7.2,119,2004,"Action, Adventure, Comedy, Drama, Romance",205928,2004-11-20,Wes Anderson
73,tt1605783,2018-07-19,2018-07-19,,Midnight in Paris,https://www.imdb.com/title/tt1605783/,movie,7.7,94,2011,"Comedy, Fantasy, Romance",438776,2011-05-11,Woody Allen
74,tt0119174,2018-07-21,2018-07-21,,The Game,https://www.imdb.com/title/tt0119174/,movie,7.7,129,1997,"Drama, Mystery, Thriller",413909,1997-09-03,David Fincher
75,tt1714206,2018-07-22,2018-07-22,,The Spectacular Now,https://www.imdb.com/title/tt1714206/,movie,7.1,95,2013,"Drama, Romance",158607,2013-01-18,James Ponsoldt
76,tt3521126,2018-07-22,2018-07-22,,The Disaster Artist,https://www.imdb.com/title/tt3521126/,movie,7.3,104,2017,"Biography, Comedy, Drama",160255,2017-09-11,James Franco
77,tt0082010,2018-07-23,2018-07-23,,An American Werewolf in London,https://www.imdb.com/title/tt0082010/,movie,7.5,97,1981,"Comedy, Horror",114560,1981-08-21,John Landis
78,tt0087884,2018-07-24,2018-07-24,,"Paris, Texas",https://www.imdb.com/title/tt0087884/,movie,8.1,145,1984,Drama,112502,1984-05-19,Wim Wenders
79,tt5362988,2018-07-24,2018-07-24,,Wind River,https://www.imdb.com/title/tt5362988/,movie,7.7,107,2017,"Crime, Drama, Mystery, Thriller, Western",266300,2017-01-21,Taylor Sheridan
80,tt0780536,2018-07-24,2018-07-24,,In Bruges,https://www.imdb.com/title/tt0780536/,movie,7.9,107,2008,"Comedy, Crime, Drama, Thriller",449239,2008-01-17,Martin McDonagh
81,tt4012424,2018-07-24,2018-07-24,,O Filme da Minha Vida,https://www.imdb.com/title/tt4012424/,movie,7.2,113,2017,Drama,1977,2017-08-03,Selton Mello
82,tt0050976,2018-07-26,2018-07-26,,Det sjunde inseglet,https://www.imdb.com/title/tt0050976/,movie,8.1,96,1957,"Drama, Fantasy",192275,1957-02-16,Ingmar Bergman
83,tt2370248,2018-07-26,2018-07-26,,Short Term 12,https://www.imdb.com/title/tt2370248/,movie,7.9,96,2013,Drama,90115,2013-03-10,Destin Daniel Cretton
84,tt0421082,2018-07-26,2018-07-26,,Control,https://www.imdb.com/title/tt0421082/,movie,7.6,122,2007,"Biography, Drama, Music",67350,2007-05-17,Anton Corbijn
85,tt0347149,2018-07-27,2018-07-27,,Hauru no ugoku shiro,https://www.imdb.com/title/tt0347149/,movie,8.2,119,2004,"Animation, Adventure, Family, Fantasy",420996,2004-09-05,Hayao Miyazaki
86,tt0166924,2018-07-29,2018-07-29,,Mulholland Dr.,https://www.imdb.com/title/tt0166924/,movie,7.9,147,2001,"Drama, Mystery, Thriller",371102,2001-05-16,David Lynch
87,tt1677720,2018-07-29,2018-07-29,,Ready Player One,https://www.imdb.com/title/tt1677720/,movie,7.4,140,2018,"Action, Adventure, Sci-Fi",462095,2018-03-11,Steven Spielberg
88,tt0335245,2018-07-30,2018-07-30,,The Ladykillers,https://www.imdb.com/title/tt0335245/,movie,6.2,104,2004,"Comedy, Crime, Thriller",107384,2004-03-26,"Ethan Coen, Joel Coen"
89,tt1058017,2018-07-31,2018-07-31,,The Invention of Lying,https://www.imdb.com/title/tt1058017/,movie,6.3,100,2009,"Comedy, Fantasy, Romance",145964,2009-09-14,"Matthew Robinson, Ricky Gervais"
90,tt0268126,2018-08-04,2018-08-04,,Adaptation.,https://www.imdb.com/title/tt0268126/,movie,7.7,115,2002,"Comedy, Drama",198535,2002-12-03,Spike Jonze
91,tt0243133,2018-08-04,2018-08-04,,The Man Who Wasn't There,https://www.imdb.com/title/tt0243133/,movie,7.5,116,2001,"Crime, Drama",112779,2001-05-13,Joel Coen
92,tt4154756,2018-08-05,2018-08-05,,Avengers: Infinity War,https://www.imdb.com/title/tt4154756/,movie,8.4,149,2018,"Action, Adventure, Sci-Fi",1148165,2018-04-23,"Anthony Russo, Joe Russo"
93,tt5463162,2018-08-13,2018-08-13,,Deadpool 2,https://www.imdb.com/title/tt5463162/,movie,7.6,119,2018,"Action, Adventure, Comedy, Sci-Fi",615802,2018-05-01,David Leitch
94,tt0449467,2018-08-13,2018-08-13,,Babel,https://www.imdb.com/title/tt0449467/,movie,7.5,143,2006,Drama,311403,2006-05-23,Alejandro G. Iñárritu
95,tt4441422,2018-08-26,2018-08-26,,Hangman,https://www.imdb.com/title/tt4441422/,movie,4.6,85,2015,"Horror, Thriller",2581,2015-03-14,Adam Mason
96,tt0369339,2018-08-26,2018-08-26,,Collateral,https://www.imdb.com/title/tt0369339/,movie,7.5,120,2004,"Action, Crime, Drama, Thriller",420924,2004-08-02,Michael Mann
97,tt0258463,2018-08-26,2018-08-26,,The Bourne Identity,https://www.imdb.com/title/tt0258463/,movie,7.8,119,2002,"Action, Mystery, Thriller",563290,2002-06-06,Doug Liman
98,tt0106246,2018-08-26,2018-08-26,,Alive,https://www.imdb.com/title/tt0106246/,movie,7.1,128,1993,"Adventure, Biography, Drama, Thriller",59019,1993-01-15,Frank Marshall
99,tt5164214,2018-08-26,2018-08-26,,Ocean's Eight,https://www.imdb.com/title/tt5164214/,movie,6.3,110,2018,"Action, Comedy, Crime",232754,2018-06-05,Gary Ross
100,tt1379182,2018-08-27,2018-08-27,,Kynodontas,https://www.imdb.com/title/tt1379182/,movie,7.2,97,2009,"Drama, Thriller",102432,2009-05-18,Yorgos Lanthimos
101,tt0056172,2018-08-28,2018-08-28,,Lawrence of Arabia,https://www.imdb.com/title/tt0056172/,movie,8.3,218,1962,"Adventure, Biography, Drama, War",304564,1962-12-10,David Lean
102,tt0454848,2018-09-04,2018-09-04,,Inside Man,https://www.imdb.com/title/tt0454848/,movie,7.6,129,2006,"Crime, Drama, Mystery, Thriller",387022,2006-03-16,Spike Lee
103,tt0119217,2018-09-04,2018-09-04,,Good Will Hunting,https://www.imdb.com/title/tt0119217/,movie,8.3,126,1997,"Drama, Romance",1018218,1997-12-02,Gus Van Sant
104,tt3416742,2018-10-03,2018-10-03,,What We Do in the Shadows,https://www.imdb.com/title/tt3416742/,movie,7.6,86,2014,"Comedy, Horror",192491,2014-01-19,"Taika Waititi, Jemaine Clement"
105,tt5610554,2018-10-03,2018-10-03,,Tully,https://www.imdb.com/title/tt5610554/,movie,6.9,95,2018,"Comedy, Drama, Mystery",61677,2018-01-23,Jason Reitman
106,tt4698684,2018-10-07,2018-10-07,,Hunt for the Wilderpeople,https://www.imdb.com/title/tt4698684/,movie,7.8,101,2016,"Adventure, Comedy, Drama",136642,2016-01-22,Taika Waititi
107,tt3397884,2018-10-15,2018-10-15,,Sicario,https://www.imdb.com/title/tt3397884/,movie,7.7,121,2015,"Action, Crime, Drama, Mystery, Thriller",452347,2015-05-19,Denis Villeneuve
108,tt0168629,2018-10-15,2018-10-15,,Dancer in the Dark,https://www.imdb.com/title/tt0168629/,movie,7.9,140,2000,"Crime, Drama, Musical",113884,2000-05-17,Lars von Trier
109,tt0125664,2018-10-17,2018-10-17,,Man on the Moon,https://www.imdb.com/title/tt0125664/,movie,7.4,118,1999,"Biography, Comedy, Drama",134761,1999-12-07,Milos Forman
110,tt0077651,2018-10-17,2018-10-17,,Halloween,https://www.imdb.com/title/tt0077651/,movie,7.7,91,1978,"Horror, Thriller",291673,1978-10-25,John Carpenter
111,tt0112573,2018-10-19,2018-10-19,,Braveheart,https://www.imdb.com/title/tt0112573/,movie,8.3,178,1995,"Biography, Drama, History, War",1065117,1995-05-18,Mel Gibson
112,tt0075686,2018-10-19,2018-10-19,,Annie Hall,https://www.imdb.com/title/tt0075686/,movie,8.0,93,1977,"Comedy, Romance",272021,1977-03-27,Woody Allen
113,tt0838221,2018-10-20,2018-10-20,,The Darjeeling Limited,https://www.imdb.com/title/tt0838221/,movie,7.2,91,2007,"Adventure, Comedy, Drama",210296,2007-08-31,Wes Anderson
114,tt5052474,2018-10-23,2018-10-23,,Sicario: Day of the Soldado,https://www.imdb.com/title/tt5052474/,movie,7.0,122,2018,"Action, Crime, Drama, Mystery, Thriller",158728,2018-06-18,Stefano Sollima
115,tt0206634,2018-10-23,2018-10-23,,Children of Men,https://www.imdb.com/title/tt0206634/,movie,7.9,109,2006,"Action, Drama, Sci-Fi, Thriller",515475,2006-09-03,Alfonso Cuarón
116,tt0217505,2018-10-24,2018-10-24,,Gangs of New York,https://www.imdb.com/title/tt0217505/,movie,7.5,167,2002,"Crime, Drama",458756,2002-12-09,Martin Scorsese
117,tt0387564,2018-11-05,2018-11-05,,Saw,https://www.imdb.com/title/tt0387564/,movie,7.6,103,2004,"Horror, Mystery, Thriller",441458,2004-01-19,James Wan
118,tt0268978,2018-11-05,2018-11-05,,A Beautiful Mind,https://www.imdb.com/title/tt0268978/,movie,8.2,135,2001,"Biography, Drama",959787,2001-12-13,Ron Howard
119,tt6499752,2018-11-05,2018-11-05,,Upgrade,https://www.imdb.com/title/tt6499752/,movie,7.5,100,2018,"Action, Sci-Fi, Thriller",197057,2018-03-10,Leigh Whannell
120,tt0056592,2018-11-05,2018-11-05,,To Kill a Mockingbird,https://www.imdb.com/title/tt0056592/,movie,8.3,129,1962,"Crime, Drama",325223,1962-12-25,Robert Mulligan
121,tt0086879,2018-11-08,2018-11-08,,Amadeus,https://www.imdb.com/title/tt0086879/,movie,8.4,160,1984,"Biography, Drama, Music",414867,1984-09-06,Milos Forman
122,tt0128445,2018-11-12,2018-11-12,,Rushmore,https://www.imdb.com/title/tt0128445/,movie,7.6,93,1998,"Comedy, Drama, Romance",193255,1998-09-17,Wes Anderson
123,tt0075314,2018-11-12,2018-11-12,,Taxi Driver,https://www.imdb.com/title/tt0075314/,movie,8.2,114,1976,"Crime, Drama",879870,1976-02-08,Martin Scorsese
124,tt0096283,2018-11-12,2018-11-12,,Tonari no Totoro,https://www.imdb.com/title/tt0096283/,movie,8.1,86,1988,"Animation, Comedy, Family, Fantasy",359340,1988-04-16,Hayao Miyazaki
125,tt0045152,2018-11-12,2018-11-12,,Singin' in the Rain,https://www.imdb.com/title/tt0045152/,movie,8.3,103,1952,"Comedy, Musical, Romance",252074,1952-03-27,"Gene Kelly, Stanley Donen"
126,tt0361748,2018-11-14,2018-11-14,,Inglourious Basterds,https://www.imdb.com/title/tt0361748/,movie,8.3,153,2009,"Adventure, Drama, War",1516481,2009-05-20,Quentin Tarantino
127,tt6998518,2018-11-14,2018-11-14,,Mandy,https://www.imdb.com/title/tt6998518/,movie,6.5,121,2018,"Action, Fantasy, Horror",84955,2018-01-19,Panos Cosmatos
128,tt0272338,2018-11-16,2018-11-16,,Punch-Drunk Love,https://www.imdb.com/title/tt0272338/,movie,7.3,95,2002,"Comedy, Drama, Romance, Thriller",171861,2002-05-19,Paul Thomas Anderson
129,tt6412452,2018-12-03,2018-12-03,,The Ballad of Buster Scruggs,https://www.imdb.com/title/tt6412452/,movie,7.3,133,2018,"Comedy, Drama, Musical, Mystery, Romance, Western",159767,2018-08-31,"Ethan Coen, Joel Coen"
130,tt1270797,2018-12-27,2018-12-27,,Venom,https://www.imdb.com/title/tt1270797/,movie,6.6,112,2018,"Action, Adventure, Sci-Fi",515728,2018-10-01,Ruben Fleischer
131,tt0088323,2018-12-27,2018-12-27,,Die unendliche Geschichte,https://www.imdb.com/title/tt0088323/,movie,7.3,102,1984,"Adventure, Drama, Family, Fantasy",151306,1984-04-06,Wolfgang Petersen
132,tt0409459,2018-12-27,2018-12-27,,Watchmen,https://www.imdb.com/title/tt0409459/,movie,7.6,162,2009,"Action, Drama, Mystery, Sci-Fi",567962,2009-02-23,Zack Snyder
133,tt2737304,2018-12-27,2018-12-27,,Bird Box,https://www.imdb.com/title/tt2737304/,movie,6.6,124,2018,"Horror, Mystery, Sci-Fi",369777,2018-11-12,Susanne Bier
134,tt0059592,2018-12-27,2018-12-27,,Pierrot le fou,https://www.imdb.com/title/tt0059592/,movie,7.4,110,1965,"Crime, Drama, Romance",35832,1965-08-29,Jean-Luc Godard
135,tt0110632,2018-12-29,2018-12-29,,Natural Born Killers,https://www.imdb.com/title/tt0110632/,movie,7.2,119,1994,"Action, Crime, Romance",244375,1994-08-26,Oliver Stone
136,tt0167404,2018-12-29,2018-12-29,,The Sixth Sense,https://www.imdb.com/title/tt0167404/,movie,8.2,107,1999,"Drama, Mystery, Thriller",1020942,1999-08-02,M. Night Shyamalan
137,tt0824747,2018-12-31,2018-12-31,,Changeling,https://www.imdb.com/title/tt0824747/,movie,7.8,141,2008,"Biography, Crime, Drama, History, Mystery, Thriller",261297,2008-05-20,Clint Eastwood
138,tt1596363,2018-12-31,2018-12-31,,The Big Short,https://www.imdb.com/title/tt1596363/,movie,7.8,130,2015,"Biography, Comedy, Drama, History",456910,2015-11-12,Adam McKay
139,tt9495224,2018-12-31,2018-12-31,,Black Mirror: Bandersnatch,https://www.imdb.com/title/tt9495224/,movie,7.1,90,2018,"Drama, Fantasy, Mystery, Sci-Fi, Thriller",133211,2018-12-28,David Slade
140,tt0105323,2018-12-31,2018-12-31,,Scent of a Woman,https://www.imdb.com/title/tt0105323/,movie,8.0,156,1992,Drama,315441,1992-12-23,Martin Brest
1,tt2562232,2019-01-01,2019-01-01,,Birdman or (The Unexpected Virtue of Ignorance),https://www.imdb.com/title/tt2562232/,movie,7.7,119,2014,"Comedy, Drama",650584,2014-08-27,Alejandro G. Iñárritu
2,tt7349662,2019-01-04,2019-01-04,,BlacKkKlansman,https://www.imdb.com/title/tt7349662/,movie,7.5,135,2018,"Biography, Comedy, Crime, Drama",278169,2018-05-14,Spike Lee
3,tt0081398,2019-01-05,2019-01-05,,Raging Bull,https://www.imdb.com/title/tt0081398/,movie,8.1,129,1980,"Biography, Drama, Sport",367494,1980-11-13,Martin Scorsese
4,tt0080339,2019-01-05,2019-01-05,,Airplane!,https://www.imdb.com/title/tt0080339/,movie,7.7,88,1980,Comedy,251667,1980-07-02,"Jim Abrahams, Jerry Zucker, David Zucker"
5,tt0093105,2019-01-06,2019-01-06,,"Good Morning, Vietnam",https://www.imdb.com/title/tt0093105/,movie,7.3,121,1987,"Biography, Comedy, Drama, War",148621,1987-12-23,Barry Levinson
6,tt6628394,2019-01-08,2019-01-08,,Bad Times at the El Royale,https://www.imdb.com/title/tt6628394/,movie,7.1,141,2018,"Crime, Drama, Mystery, Thriller",158211,2018-09-22,Drew Goddard
7,tt1502407,2019-01-10,2019-01-10,,Halloween,https://www.imdb.com/title/tt1502407/,movie,6.5,106,2018,"Crime, Horror, Thriller",162309,2018-09-08,David Gordon Green
8,tt0365830,2019-01-10,2019-01-10,,Tenacious D in The Pick of Destiny,https://www.imdb.com/title/tt0365830/,movie,6.8,94,2006,"Adventure, Comedy, Music, Musical",113018,2006-10-26,Liam Lynch
9,tt0047296,2019-01-10,2019-01-10,,On the Waterfront,https://www.imdb.com/title/tt0047296/,movie,8.1,108,1954,"Crime, Drama, Thriller",160179,1954-06-22,Elia Kazan
10,tt1255953,2019-01-12,2019-01-12,,Incendies,https://www.imdb.com/title/tt1255953/,movie,8.3,131,2010,"Drama, Mystery, War",187786,2010-09-03,Denis Villeneuve
11,tt7784604,2019-01-15,2019-01-15,,Hereditary,https://www.imdb.com/title/tt7784604/,movie,7.3,127,2018,"Drama, Horror, Mystery, Thriller",350504,2018-01-21,Ari Aster
12,tt6155172,2019-01-16,2019-01-16,,Roma,https://www.imdb.com/title/tt6155172/,movie,7.7,135,2018,Drama,165200,2018-08-30,Alfonso Cuarón
13,tt0072890,2019-01-17,2019-01-17,,Dog Day Afternoon,https://www.imdb.com/title/tt0072890/,movie,8.0,125,1975,"Biography, Crime, Drama, Thriller",266775,1975-09-19,Sidney Lumet
14,tt1527186,2019-01-17,2019-01-17,,Melancholia,https://www.imdb.com/title/tt1527186/,movie,7.1,135,2011,"Drama, Sci-Fi",189921,2011-05-18,Lars von Trier
15,tt1213641,2019-01-17,2019-01-17,,First Man,https://www.imdb.com/title/tt1213641/,movie,7.3,141,2018,"Biography, Drama, History",196251,2018-08-29,Damien Chazelle
16,tt1727824,2019-01-29,2019-01-29,,Bohemian Rhapsody,https://www.imdb.com/title/tt1727824/,movie,7.9,134,2018,"Biography, Drama, Music",564945,2018-10-23,Bryan Singer
17,tt0289879,2019-01-29,2019-01-29,,The Butterfly Effect,https://www.imdb.com/title/tt0289879/,movie,7.6,113,2004,"Drama, Sci-Fi, Thriller",507271,2004-01-17,"J. Mackye Gruber, Eric Bress"
18,tt0405422,2019-01-30,2019-01-30,,The 40 Year Old Virgin,https://www.imdb.com/title/tt0405422/,movie,7.1,116,2005,"Comedy, Romance",454081,2005-08-11,Judd Apatow
19,tt0393109,2019-01-31,2019-01-31,,Brick,https://www.imdb.com/title/tt0393109/,movie,7.2,110,2005,"Crime, Drama, Mystery, Thriller",108666,2005-01-31,Rian Johnson
20,tt1517451,2019-02-01,2019-02-01,,A Star Is Born,https://www.imdb.com/title/tt1517451/,movie,7.6,136,2018,"Drama, Music, Romance",403528,2018-08-31,Bradley Cooper
21,tt2884206,2019-02-01,2019-02-01,,I Origins,https://www.imdb.com/title/tt2884206/,movie,7.3,106,2014,"Drama, Mystery, Romance, Sci-Fi",130195,2014-01-18,Mike Cahill
22,tt1045658,2019-02-02,2019-02-02,,Silver Linings Playbook,https://www.imdb.com/title/tt1045658/,movie,7.7,122,2012,"Comedy, Drama, Romance",727075,2012-09-08,David O. Russell
23,tt3577624,2019-02-05,2019-02-05,,A Perfect Day,https://www.imdb.com/title/tt3577624/,movie,6.8,106,2015,"Comedy, Drama, War",23027,2015-05-17,Fernando León de Aranoa
24,tt0376541,2019-02-05,2019-02-05,,Closer,https://www.imdb.com/title/tt0376541/,movie,7.2,104,2004,"Drama, Romance",229443,2004-11-22,Mike Nichols
25,tt0012349,2019-02-07,2019-02-07,,The Kid,https://www.imdb.com/title/tt0012349/,movie,8.2,68,1921,"Comedy, Drama, Family",130915,1921-01-16,Charles Chaplin
26,tt0053125,2019-02-08,2019-02-08,,North by Northwest,https://www.imdb.com/title/tt0053125/,movie,8.3,136,1959,"Action, Adventure, Mystery, Thriller",337720,1959-07-01,Alfred Hitchcock
27,tt5613484,2019-02-09,2019-02-09,,Mid90s,https://www.imdb.com/title/tt5613484/,movie,7.3,85,2018,"Comedy, Drama",73544,2018-09-09,Jonah Hill
28,tt2883512,2019-02-21,2019-02-21,,Chef,https://www.imdb.com/title/tt2883512/,movie,7.3,114,2014,"Adventure, Comedy, Drama",224831,2014-03-07,Jon Favreau
29,tt5083738,2019-02-21,2019-02-21,,The Favourite,https://www.imdb.com/title/tt5083738/,movie,7.5,119,2018,"Biography, Comedy, Drama, History",211080,2018-08-30,Yorgos Lanthimos
30,tt6966692,2019-02-22,2019-02-22,,Green Book,https://www.imdb.com/title/tt6966692/,movie,8.2,130,2018,"Biography, Comedy, Drama, Music",531162,2018-09-11,Peter Farrelly
31,tt2359024,2019-03-08,2019-03-08,,Blue Ruin,https://www.imdb.com/title/tt2359024/,movie,7.1,90,2013,"Crime, Drama, Thriller",76843,2013-05-17,Jeremy Saulnier
32,tt0230600,2019-03-09,2019-03-09,,The Others,https://www.imdb.com/title/tt0230600/,movie,7.6,101,2001,"Horror, Mystery, Thriller",380326,2001-08-02,Alejandro Amenábar
33,tt1034415,2019-03-12,2019-03-12,,Suspiria,https://www.imdb.com/title/tt1034415/,movie,6.7,152,2018,"Drama, Fantasy, Horror, Mystery, Thriller",86199,2018-09-01,Luca Guadagnino
34,tt7533152,2019-03-12,2019-03-12,,The Boy Who Harnessed the Wind,https://www.imdb.com/title/tt7533152/,movie,7.6,113,2019,"Biography, Drama, History",41794,2019-01-25,Chiwetel Ejiofor
35,tt0343660,2019-03-19,2019-03-19,,50 First Dates,https://www.imdb.com/title/tt0343660/,movie,6.8,99,2004,"Comedy, Drama, Romance",370190,2004-02-03,Peter Segal
36,tt4633694,2019-03-30,2019-03-30,,Spider-Man: Into the Spider-Verse,https://www.imdb.com/title/tt4633694/,movie,8.4,117,2018,"Animation, Action, Adventure, Comedy, Family, Fantasy, Sci-Fi",622156,2018-12-12,"Bob Persichetti, Rodney Rothman, Peter Ramsey"
37,tt0362227,2019-04-07,2019-04-07,,The Terminal,https://www.imdb.com/title/tt0362227/,movie,7.4,128,2004,"Comedy, Drama, Romance",478597,2004-06-09,Steven Spielberg
38,tt0175880,2019-04-21,2019-04-21,,Magnolia,https://www.imdb.com/title/tt0175880/,movie,8.0,188,1999,Drama,321744,1999-12-08,Paul Thomas Anderson
39,tt0110729,2019-04-26,2019-04-26,,Once Were Warriors,https://www.imdb.com/title/tt0110729/,movie,7.9,102,1994,"Crime, Drama",35869,1994-09-02,Lee Tamahori
40,tt2713180,2019-04-30,2019-04-30,,Fury,https://www.imdb.com/title/tt2713180/,movie,7.6,134,2014,"Action, Drama, War",521194,2014-10-15,David Ayer
41,tt1226837,2019-04-30,2019-04-30,,Beautiful Boy,https://www.imdb.com/title/tt1226837/,movie,7.3,120,2018,"Biography, Drama",89968,2018-09-07,Felix van Groeningen
42,tt0115734,2019-05-02,2019-05-02,,Bottle Rocket,https://www.imdb.com/title/tt0115734/,movie,6.9,91,1996,"Comedy, Crime, Drama",81491,1996-02-21,Wes Anderson
43,tt0133189,2019-05-08,2019-05-08,,SLC Punk!,https://www.imdb.com/title/tt0133189/,movie,7.4,97,1998,"Comedy, Drama, Music, Romance",31502,1998-09-24,James Merendino
44,tt0289043,2019-05-08,2019-05-08,,28 Days Later...,https://www.imdb.com/title/tt0289043/,movie,7.5,113,2002,"Drama, Horror, Sci-Fi, Thriller",429959,2002-11-01,Danny Boyle
45,tt5688932,2019-05-12,2019-05-12,,Sorry to Bother You,https://www.imdb.com/title/tt5688932/,movie,6.9,112,2018,"Comedy, Drama, Fantasy, Sci-Fi",84944,2018-01-20,Boots Riley
46,tt0332280,2019-05-12,2019-05-12,,The Notebook,https://www.imdb.com/title/tt0332280/,movie,7.8,123,2004,"Drama, Romance",595543,2004-05-20,Nick Cassavetes
47,tt4560008,2019-06-02,2019-06-02,,This Beautiful Fantastic,https://www.imdb.com/title/tt4560008/,movie,6.9,92,2016,"Comedy, Drama, Romance",12748,2016-10-20,Simon Aboud
48,tt1702014,2019-06-02,2019-06-02,,Hoje Eu Quero Voltar Sozinho,https://www.imdb.com/title/tt1702014/,movie,7.9,96,2014,"Drama, Romance",26872,2014-02-10,Daniel Ribeiro
49,tt2167266,2019-06-02,2019-06-02,,Tracks,https://www.imdb.com/title/tt2167266/,movie,7.1,112,2013,"Adventure, Biography, Drama",30816,2013-05-22,John Curran
50,tt6857112,2019-06-03,2019-06-03,,Us,https://www.imdb.com/title/tt6857112/,movie,6.8,116,2019,"Horror, Mystery, Thriller",320967,2019-03-08,Jordan Peele
51,tt0096256,2019-06-05,2019-06-05,,They Live,https://www.imdb.com/title/tt0096256/,movie,7.2,94,1988,"Action, Horror, Sci-Fi, Thriller",138159,1988-11-04,John Carpenter
52,tt6265828,2019-06-07,2019-06-07,,A Ghost Story,https://www.imdb.com/title/tt6265828/,movie,6.8,92,2017,"Drama, Fantasy, Romance",76436,2017-01-22,David Lowery
53,tt0106856,2019-06-07,2019-06-07,,Falling Down,https://www.imdb.com/title/tt0106856/,movie,7.6,113,1993,"Action, Crime, Drama, Thriller",199342,1993-02-26,Joel Schumacher
54,tt7282468,2019-06-08,2019-06-08,,Beoning,https://www.imdb.com/title/tt7282468/,movie,7.5,148,2018,"Drama, Mystery, Thriller",71342,2018-05-16,Lee Chang-dong
55,tt0108399,2019-06-14,2019-06-14,,True Romance,https://www.imdb.com/title/tt0108399/,movie,7.9,119,1993,"Crime, Drama, Romance, Thriller",235554,1993-09-08,Tony Scott
56,tt1791528,2019-06-15,2019-06-15,,Inherent Vice,https://www.imdb.com/title/tt1791528/,movie,6.6,148,2014,"Comedy, Crime, Drama, Mystery, Romance",108337,2014-10-04,Paul Thomas Anderson
57,tt1065073,2019-06-16,2019-06-16,,Boyhood,https://www.imdb.com/title/tt1065073/,movie,7.9,165,2014,Drama,362017,2014-01-19,Richard Linklater
58,tt3289956,2019-06-18,2019-06-18,,The Autopsy of Jane Doe,https://www.imdb.com/title/tt3289956/,movie,6.8,86,2016,"Horror, Mystery, Thriller",129520,2016-09-09,André Øvredal
59,tt2861532,2019-06-18,2019-06-18,,O Lobo Atrás da Porta,https://www.imdb.com/title/tt2861532/,movie,7.4,101,2013,"Crime, Drama, Thriller",4813,2013-09-11,Fernando Coimbra
60,tt0076786,2019-06-20,2019-06-20,,Suspiria,https://www.imdb.com/title/tt0076786/,movie,7.3,99,1977,Horror,99861,1977-02-01,Dario Argento
61,tt5884052,2019-06-21,2019-06-21,,Pokémon: Detective Pikachu,https://www.imdb.com/title/tt5884052/,movie,6.5,104,2019,"Action, Adventure, Comedy, Family, Mystery, Sci-Fi",176009,2019-05-02,Rob Letterman
62,tt0087843,2019-07-02,2019-07-02,,Once Upon a Time in America,https://www.imdb.com/title/tt0087843/,movie,8.3,229,1984,"Crime, Drama",364994,1984-05-20,Sergio Leone
63,tt1683526,2019-07-08,2019-07-08,,Detachment,https://www.imdb.com/title/tt1683526/,movie,7.7,98,2011,Drama,93676,2011-04-25,Tony Kaye
64,tt0315733,2019-07-08,2019-07-08,,21 Grams,https://www.imdb.com/title/tt0315733/,movie,7.6,124,2003,"Crime, Drama, Thriller",242223,2003-09-05,Alejandro G. Iñárritu
65,tt0120663,2019-07-08,2019-07-08,,Eyes Wide Shut,https://www.imdb.com/title/tt0120663/,movie,7.5,159,1999,"Drama, Mystery, Thriller",359520,1999-07-13,Stanley Kubrick
66,tt0086022,2019-07-10,2019-07-10,,Nostalghia,https://www.imdb.com/title/tt0086022/,movie,8.0,125,1983,Drama,28901,1983-05-17,Andrei Tarkovsky
67,tt0119488,2019-07-10,2019-07-10,,L.A. Confidential,https://www.imdb.com/title/tt0119488/,movie,8.2,138,1997,"Crime, Drama, Mystery, Thriller",599156,1997-05-14,Curtis Hanson
68,tt0073195,2019-07-11,2019-07-11,,Jaws,https://www.imdb.com/title/tt0073195/,movie,8.1,124,1975,"Adventure, Mystery, Thriller",636239,1975-06-20,Steven Spielberg
69,tt2582496,2019-07-12,2019-07-12,,Me and Earl and the Dying Girl,https://www.imdb.com/title/tt2582496/,movie,7.7,105,2015,"Comedy, Drama, Romance",135577,2015-01-25,Alfonso Gomez-Rejon
70,tt0275277,2019-07-22,2019-07-22,,Cowboy Bebop: Tengoku no tobira,https://www.imdb.com/title/tt0275277/,movie,7.8,115,2001,"Animation, Action, Crime, Drama, Sci-Fi",51180,2001-09-01,"Hiroyuki Okiura, Shin'ichirô Watanabe, Yoshiyuki Takei, Tensai Okamura, Mary Elizabeth McGlynn"
71,tt0108550,2019-07-22,2019-07-22,,What's Eating Gilbert Grape,https://www.imdb.com/title/tt0108550/,movie,7.7,118,1993,Drama,246716,1993-10-01,Lasse Hallström
72,tt2347569,2019-07-25,2019-07-25,,Frances Ha,https://www.imdb.com/title/tt2347569/,movie,7.4,86,2012,"Comedy, Drama, Romance",89829,2012-09-01,Noah Baumbach
73,tt0118749,2019-07-25,2019-07-25,,Boogie Nights,https://www.imdb.com/title/tt0118749/,movie,7.9,155,1997,Drama,275024,1997-09-11,Paul Thomas Anderson
74,tt5742374,2019-07-25,2019-07-25,,You Were Never Really Here,https://www.imdb.com/title/tt5742374/,movie,6.7,89,2017,"Crime, Drama",124191,2017-05-27,Lynne Ramsay
75,tt0146882,2019-07-25,2019-07-25,,High Fidelity,https://www.imdb.com/title/tt0146882/,movie,7.4,113,2000,"Comedy, Drama, Music, Romance",185938,2000-03-17,Stephen Frears
76,tt1570728,2019-07-26,2019-07-26,,"Crazy, Stupid, Love.",https://www.imdb.com/title/tt1570728/,movie,7.4,118,2011,"Comedy, Drama, Romance",541235,2011-07-19,"Glenn Ficarra, John Requa"
77,tt0100157,2019-07-29,2019-07-29,,Misery,https://www.imdb.com/title/tt0100157/,movie,7.8,107,1990,"Drama, Thriller",224109,1990-11-29,Rob Reiner
78,tt0087544,2019-07-30,2019-07-30,,Kaze no tani no Naushika,https://www.imdb.com/title/tt0087544/,movie,8.0,117,1984,"Animation, Adventure, Sci-Fi",176042,1984-03-11,Hayao Miyazaki
79,tt0405159,2019-07-30,2019-07-30,,Million Dollar Baby,https://www.imdb.com/title/tt0405159/,movie,8.1,132,2004,"Drama, Sport",705525,2004-12-05,Clint Eastwood
80,tt1010048,2019-07-31,2019-07-31,,Slumdog Millionaire,https://www.imdb.com/title/tt1010048/,movie,8.0,120,2008,"Crime, Drama, Romance",863456,2008-08-30,"Loveleen Tandan, Danny Boyle"
81,tt0130827,2019-08-02,2019-08-02,,Lola rennt,https://www.imdb.com/title/tt0130827/,movie,7.7,81,1998,"Action, Crime, Thriller",203399,1998-08-20,Tom Tykwer
82,tt0046912,2019-08-02,2019-08-02,,Dial M for Murder,https://www.imdb.com/title/tt0046912/,movie,8.2,105,1954,"Crime, Thriller",182922,1954-05-18,Alfred Hitchcock
83,tt0165710,2019-08-03,2019-08-03,,Detroit Rock City,https://www.imdb.com/title/tt0165710/,movie,6.8,95,1999,"Adventure, Comedy, Music",40567,1999-08-09,Adam Rifkin
84,tt0309698,2019-08-03,2019-08-03,,Identity,https://www.imdb.com/title/tt0309698/,movie,7.3,90,2003,"Mystery, Thriller",259548,2003-04-23,James Mangold
85,tt0064665,2019-08-05,2019-08-05,,Midnight Cowboy,https://www.imdb.com/title/tt0064665/,movie,7.8,113,1969,Drama,116318,1969-05-25,John Schlesinger
86,tt0396171,2019-08-05,2019-08-05,,Perfume: The Story of a Murderer,https://www.imdb.com/title/tt0396171/,movie,7.5,147,2006,"Crime, Drama, Fantasy",259875,2006-09-07,Tom Tykwer
87,tt0114746,2019-08-07,2019-08-07,,Twelve Monkeys,https://www.imdb.com/title/tt0114746/,movie,8.0,129,1995,"Mystery, Sci-Fi, Thriller",633551,1995-12-08,Terry Gilliam
88,tt2024544,2019-08-10,2019-08-10,,12 Years a Slave,https://www.imdb.com/title/tt2024544/,movie,8.1,134,2013,"Biography, Drama, History",722610,2013-08-30,Steve McQueen
89,tt0079833,2019-08-12,2019-08-12,,Rupan sansei: Kariosutoro no shiro,https://www.imdb.com/title/tt0079833/,movie,7.6,100,1979,"Animation, Action, Adventure, Comedy, Fantasy",32126,1979-12-15,Hayao Miyazaki
90,tt0103874,2019-08-25,2019-08-25,,Bram Stoker's Dracula,https://www.imdb.com/title/tt0103874/,movie,7.4,128,1992,"Drama, Fantasy, Horror, Romance",228092,1992-11-10,Francis Ford Coppola
91,tt3361792,2019-08-25,2019-08-25,,Tolkien,https://www.imdb.com/title/tt3361792/,movie,6.8,112,2019,"Biography, Drama, Romance, War",44265,2019-04-29,Dome Karukoski
92,tt4154796,2019-08-25,2019-08-25,,Avengers: Endgame,https://www.imdb.com/title/tt4154796/,movie,8.4,181,2019,"Action, Adventure, Drama, Sci-Fi",1206748,2019-04-18,"Anthony Russo, Joe Russo"
93,tt0079944,2019-08-30,2019-08-30,,Stalker,https://www.imdb.com/title/tt0079944/,movie,8.1,162,1979,"Drama, Sci-Fi",139877,1979-05-31,Andrei Tarkovsky
94,tt7131622,2019-08-31,2019-08-31,,Once Upon a Time in... Hollywood,https://www.imdb.com/title/tt7131622/,movie,7.6,161,2019,"Comedy, Drama",794968,2019-05-21,Quentin Tarantino
95,tt0080678,2019-08-31,2019-08-31,,The Elephant Man,https://www.imdb.com/title/tt0080678/,movie,8.2,124,1980,"Biography, Drama",250804,1980-10-02,David Lynch
96,tt6751668,2019-09-01,2019-09-01,,Gisaengchung,https://www.imdb.com/title/tt6751668/,movie,8.5,132,2019,"Drama, Thriller",879740,2019-05-21,Bong Joon Ho
97,tt0353969,2019-09-11,2019-09-11,,Salinui chueok,https://www.imdb.com/title/tt0353969/,movie,8.1,131,2003,"Crime, Drama, Mystery, Thriller",200980,2003-05-02,Bong Joon Ho
98,tt4846232,2019-09-11,2019-09-11,,Good Time,https://www.imdb.com/title/tt4846232/,movie,7.3,102,2017,"Crime, Drama, Thriller",132687,2017-05-25,"Benny Safdie, Josh Safdie"
99,tt2231461,2019-09-11,2019-09-11,,Rampage,https://www.imdb.com/title/tt2231461/,movie,6.1,107,2018,"Action, Adventure, Sci-Fi",178762,2018-04-09,Brad Peyton
100,tt2005151,2019-09-11,2019-09-11,,War Dogs,https://www.imdb.com/title/tt2005151/,movie,7.1,114,2016,"Biography, Comedy, Crime, Drama, War",238151,2016-08-03,Todd Phillips
101,tt0061722,2019-09-11,2019-09-11,,The Graduate,https://www.imdb.com/title/tt0061722/,movie,8.0,106,1967,"Comedy, Drama, Romance",282553,1967-12-20,Mike Nichols
102,tt0156887,2019-09-11,2019-09-11,,Pâfekuto burû,https://www.imdb.com/title/tt0156887/,movie,8.0,81,1997,"Animation, Crime, Drama, Mystery, Thriller",86665,1997-08-05,Satoshi Kon
103,tt1723811,2019-09-11,2019-09-11,,Shame,https://www.imdb.com/title/tt1723811/,movie,7.2,101,2011,Drama,201780,2011-09-04,Steve McQueen
104,tt0050613,2019-09-14,2019-09-14,,Kumonosu-jô,https://www.imdb.com/title/tt0050613/,movie,8.1,110,1957,Drama,54331,1957-01-15,Akira Kurosawa
105,tt2229499,2019-09-30,2019-09-30,,Don Jon,https://www.imdb.com/title/tt2229499/,movie,6.5,90,2013,"Comedy, Drama, Romance",244100,2013-01-18,Joseph Gordon-Levitt
106,tt0113247,2019-09-30,2019-09-30,,La haine,https://www.imdb.com/title/tt0113247/,movie,8.1,98,1995,"Crime, Drama",185523,1995-05-27,Mathieu Kassovitz
107,tt0095953,2019-09-30,2019-09-30,,Rain Man,https://www.imdb.com/title/tt0095953/,movie,8.0,133,1988,Drama,532142,1988-12-12,Barry Levinson
108,tt9398640,2019-09-30,2019-09-30,,Between Two Ferns: The Movie,https://www.imdb.com/title/tt9398640/,movie,6.1,82,2019,Comedy,35402,2019-09-20,Scott Aukerman
109,tt8772262,2019-09-30,2019-09-30,,Midsommar,https://www.imdb.com/title/tt8772262/,movie,7.1,148,2019,"Drama, Horror, Mystery, Thriller",365152,2019-06-24,Ari Aster
110,tt0090728,2019-10-05,2019-10-05,,Big Trouble in Little China,https://www.imdb.com/title/tt0090728/,movie,7.2,99,1986,"Action, Adventure, Comedy, Fantasy",148511,1986-07-02,John Carpenter
111,tt8079248,2019-10-05,2019-10-05,,Yesterday,https://www.imdb.com/title/tt8079248/,movie,6.8,116,2019,"Comedy, Fantasy, Music, Romance",160799,2019-05-04,Danny Boyle
112,tt1156398,2019-10-08,2019-10-08,,Zombieland,https://www.imdb.com/title/tt1156398/,movie,7.6,88,2009,"Action, Comedy, Horror",601610,2009-09-25,Ruben Fleischer
113,tt0069762,2019-10-11,2019-10-11,,Badlands,https://www.imdb.com/title/tt0069762/,movie,7.7,94,1973,"Action, Crime, Drama",76144,1973-10-13,Terrence Malick
114,tt9243946,2019-10-18,2019-10-18,,El Camino: A Breaking Bad Movie,https://www.imdb.com/title/tt9243946/,movie,7.3,122,2019,"Action, Crime, Drama, Thriller",274664,2019-10-07,Vince Gilligan
115,tt0109424,2019-10-18,2019-10-18,,Chung Hing sam lam,https://www.imdb.com/title/tt0109424/,movie,8.0,102,1994,"Comedy, Crime, Drama, Mystery, Romance",89908,1994-07-14,Kar-Wai Wong
116,tt7014006,2019-10-18,2019-10-18,,Eighth Grade,https://www.imdb.com/title/tt7014006/,movie,7.4,93,2018,"Comedy, Drama",80107,2018-01-19,Bo Burnham
117,tt7349950,2019-10-28,2019-10-28,,It Chapter Two,https://www.imdb.com/title/tt7349950/,movie,6.5,169,2019,"Drama, Fantasy, Horror",285987,2019-08-26,Andy Muschietti
118,tt0077405,2019-10-28,2019-10-28,,Days of Heaven,https://www.imdb.com/title/tt0077405/,movie,7.8,94,1978,"Drama, Romance",60779,1978-09-13,Terrence Malick
119,tt8359848,2019-10-31,2019-10-31,,Climax,https://www.imdb.com/title/tt8359848/,movie,6.9,97,2018,"Drama, Horror, Music",74824,2018-05-13,Gaspar Noé
120,tt0082340,2019-11-06,2019-11-06,,Escape from New York,https://www.imdb.com/title/tt0082340/,movie,7.1,99,1981,"Action, Adventure, Sci-Fi",150832,1981-04-01,John Carpenter
121,tt0106677,2019-11-06,2019-11-06,,Dazed and Confused,https://www.imdb.com/title/tt0106677/,movie,7.6,103,1993,Comedy,193171,1993-06-04,Richard Linklater
122,tt0091064,2019-11-06,2019-11-06,,The Fly,https://www.imdb.com/title/tt0091064/,movie,7.6,96,1986,"Drama, Horror, Sci-Fi",193639,1986-08-15,David Cronenberg
123,tt7984766,2019-11-12,2019-11-12,,The King,https://www.imdb.com/title/tt7984766/,movie,7.3,140,2019,"Biography, Drama, History, Romance, War",141796,2019-09-02,David Michôd
124,tt0112461,2019-11-12,2019-11-12,,The Basketball Diaries,https://www.imdb.com/title/tt0112461/,movie,7.3,102,1995,"Biography, Crime, Drama, Sport",117222,1995-01-27,Scott Kalvert
125,tt0080120,2019-11-13,2019-11-13,,The Warriors,https://www.imdb.com/title/tt0080120/,movie,7.5,93,1979,"Action, Crime, Thriller",107255,1979-02-01,Walter Hill
126,tt0058461,2019-11-14,2019-11-14,,Per un pugno di dollari,https://www.imdb.com/title/tt0058461/,movie,7.9,99,1964,"Action, Drama, Western",225769,1964-09-12,Sergio Leone
127,tt0055630,2019-11-19,2019-11-19,,Yôjinbô,https://www.imdb.com/title/tt0055630/,movie,8.2,110,1961,"Action, Drama, Thriller",127391,1961-04-25,Akira Kurosawa
128,tt0059578,2019-11-23,2019-11-23,,Per qualche dollaro in più,https://www.imdb.com/title/tt0059578/,movie,8.2,132,1965,"Drama, Western",266017,1965-12-18,Sergio Leone
129,tt1441395,2019-11-23,2019-11-23,,Under the Skin,https://www.imdb.com/title/tt1441395/,movie,6.3,108,2013,"Drama, Horror, Mystery, Sci-Fi, Thriller",151139,2013-08-29,Jonathan Glazer
130,tt0092067,2019-11-27,2019-11-27,,Tenkû no shiro Rapyuta,https://www.imdb.com/title/tt0092067/,movie,8.0,125,1986,"Animation, Adventure, Family, Fantasy",174301,1986-08-02,Hayao Miyazaki
131,tt0017136,2019-11-29,2019-11-29,,Metropolis,https://www.imdb.com/title/tt0017136/,movie,8.3,153,1927,"Drama, Sci-Fi",180093,1927-01-10,Fritz Lang
132,tt0040522,2019-12-03,2019-12-03,,Ladri di biciclette,https://www.imdb.com/title/tt0040522/,movie,8.3,89,1948,Drama,169647,1948-11-21,Vittorio De Sica
133,tt1302006,2019-12-03,2019-12-03,,The Irishman,https://www.imdb.com/title/tt1302006/,movie,7.8,209,2019,"Biography, Crime, Drama",410741,2019-09-27,Martin Scorsese
134,tt0094737,2019-12-03,2019-12-03,,Big,https://www.imdb.com/title/tt0094737/,movie,7.3,104,1988,"Comedy, Drama, Fantasy, Romance",232520,1988-06-03,Penny Marshall
135,tt2762506,2019-12-08,2019-12-08,,Bacurau,https://www.imdb.com/title/tt2762506/,movie,7.3,131,2019,"Action, Adventure, Drama, Horror, Mystery, Thriller, Western",29442,2019-05-15,"Kleber Mendonça Filho, Juliano Dornelles"
136,tt0022100,2019-12-08,2019-12-08,,M - Eine Stadt sucht einen Mörder,https://www.imdb.com/title/tt0022100/,movie,8.3,117,1931,"Crime, Mystery, Thriller",163566,1931-05-11,Fritz Lang
137,tt0070735,2019-12-08,2019-12-08,,The Sting,https://www.imdb.com/title/tt0070735/,movie,8.3,129,1973,"Comedy, Crime, Drama",271995,1973-12-25,George Roy Hill
138,tt0110148,2019-12-08,2019-12-08,,Interview with the Vampire: The Vampire Chronicles,https://www.imdb.com/title/tt0110148/,movie,7.5,123,1994,"Drama, Fantasy, Horror",335945,1994-11-09,Neil Jordan
139,tt5649144,2019-12-13,2019-12-13,,The Florida Project,https://www.imdb.com/title/tt5649144/,movie,7.6,111,2017,Drama,122150,2017-05-22,Sean Baker
140,tt7653254,2019-12-13,2019-12-13,,Marriage Story,https://www.imdb.com/title/tt7653254/,movie,7.9,137,2019,"Drama, Romance",330366,2019-08-29,Noah Baumbach
141,tt0450259,2019-12-18,2019-12-18,,Blood Diamond,https://www.imdb.com/title/tt0450259/,movie,8.0,143,2006,"Adventure, Drama, Thriller",569645,2006-12-06,Edward Zwick
142,tt0338751,2019-12-19,2019-12-19,,The Aviator,https://www.imdb.com/title/tt0338751/,movie,7.5,170,2004,"Biography, Drama",374515,2004-12-14,Martin Scorsese
143,tt1235841,2019-12-21,2019-12-21,,Medianeras,https://www.imdb.com/title/tt1235841/,movie,7.5,95,2011,"Comedy, Drama",15553,2011-02-15,Gustavo Taretto
144,tt7984734,2019-12-27,2019-12-27,,The Lighthouse,https://www.imdb.com/title/tt7984734/,movie,7.4,109,2019,"Drama, Fantasy, Horror, Mystery, Thriller",236697,2019-05-19,Robert Eggers
145,tt1560220,2019-12-29,2019-12-29,,Zombieland: Double Tap,https://www.imdb.com/title/tt1560220/,movie,6.7,99,2019,"Action, Comedy, Horror",191946,2019-10-09,Ruben Fleischer
146,tt0010323,2019-12-29,2019-12-29,,Das Cabinet des Dr. Caligari,https://www.imdb.com/title/tt0010323/,movie,8.0,76,1920,"Horror, Mystery, Thriller",67353,1920-02-26,Robert Wiene
1,tt8946378,2020-09-14,2020-09-14,,Knives Out,https://www.imdb.com/title/tt8946378/,movie,7.9,130,2019,"Comedy, Crime, Drama, Mystery, Thriller",737464,2019-09-07,Rian Johnson
2,tt4364194,2020-09-14,2020-09-14,,The Peanut Butter Falcon,https://www.imdb.com/title/tt4364194/,movie,7.6,97,2019,"Adventure, Comedy, Drama",97071,2019-03-09,"Tyler Nilson, Michael Schwartz"
3,tt7286456,2020-09-14,2020-09-14,,Joker,https://www.imdb.com/title/tt7286456/,movie,8.4,122,2019,"Crime, Drama, Thriller",1389476,2019-08-31,Todd Phillips
4,tt8404614,2020-09-14,2020-09-14,,The Two Popes,https://www.imdb.com/title/tt8404614/,movie,7.6,125,2019,"Biography, Comedy, Drama",129396,2019-08-31,Fernando Meirelles
5,tt5715874,2020-09-14,2020-09-14,,The Killing of a Sacred Deer,https://www.imdb.com/title/tt5715874/,movie,7.0,121,2017,"Drama, Horror, Mystery, Thriller",167555,2017-05-22,Yorgos Lanthimos
6,tt5727208,2020-09-14,2020-09-14,,Uncut Gems,https://www.imdb.com/title/tt5727208/,movie,7.4,135,2019,"Crime, Drama, Thriller",302188,2019-08-30,"Benny Safdie, Josh Safdie"
7,tt0142688,2020-09-14,2020-09-14,,The Ninth Gate,https://www.imdb.com/title/tt0142688/,movie,6.7,133,1999,"Mystery, Thriller",190654,1999-08-25,Roman Polanski
8,tt0383028,2020-09-14,2020-09-14,,"Synecdoche, New York",https://www.imdb.com/title/tt0383028/,movie,7.5,124,2008,Drama,95684,2008-05-23,Charlie Kaufman
9,tt5215952,2020-09-14,2020-09-14,,Gokseong,https://www.imdb.com/title/tt5215952/,movie,7.4,156,2016,"Drama, Horror, Mystery, Thriller",75455,2016-05-12,Na Hong-jin
10,tt4016934,2020-09-14,2020-09-14,,Ah-ga-ssi,https://www.imdb.com/title/tt4016934/,movie,8.1,145,2016,"Drama, Romance, Thriller",161044,2016-05-14,Park Chan-wook
11,tt0097814,2020-09-14,2020-09-14,,Majo no takkyûbin,https://www.imdb.com/title/tt0097814/,movie,7.8,103,1989,"Animation, Family, Fantasy",154974,1989-07-29,Hayao Miyazaki
12,tt1164999,2020-09-14,2020-09-14,,Biutiful,https://www.imdb.com/title/tt1164999/,movie,7.4,148,2010,"Drama, Romance",93193,2010-05-17,Alejandro G. Iñárritu
13,tt8613070,2020-09-14,2020-09-14,,Portrait de la jeune fille en feu,https://www.imdb.com/title/tt8613070/,movie,8.1,122,2019,"Drama, Romance",101456,2019-05-19,Céline Sciamma
14,tt0168122,2020-09-14,2020-09-14,,Pirates of Silicon Valley,https://www.imdb.com/title/tt0168122/,tvMovie,7.2,95,1999,"Biography, Drama, History",24908,1999-06-20,Martyn Burke
15,tt0118694,2020-09-14,2020-09-14,,Fa yeung nin wah,https://www.imdb.com/title/tt0118694/,movie,8.1,98,2000,"Drama, Romance",159238,2000-05-20,Kar-Wai Wong
16,tt3829266,2020-09-14,2020-09-14,,The Predator,https://www.imdb.com/title/tt3829266/,movie,5.3,107,2018,"Action, Adventure, Horror, Sci-Fi, Thriller",139303,2018-09-07,Shane Black
17,tt8579674,2020-09-14,2020-09-14,,1917,https://www.imdb.com/title/tt8579674/,movie,8.2,119,2019,"Action, Drama, War",637118,2019-12-04,Sam Mendes
18,tt5461944,2020-09-14,2020-09-14,,Hotel Mumbai,https://www.imdb.com/title/tt5461944/,movie,7.6,123,2018,"Action, Drama, History, Thriller",67980,2018-09-07,Anthony Maras
19,tt8367814,2020-09-14,2020-09-14,,The Gentlemen,https://www.imdb.com/title/tt8367814/,movie,7.8,113,2019,"Action, Comedy, Crime",368166,2019-12-03,Guy Ritchie
20,tt8936646,2020-09-14,2020-09-14,,Extraction,https://www.imdb.com/title/tt8936646/,movie,6.8,116,2020,"Action, Thriller",248441,2020-04-24,Sam Hargrave
21,tt1950186,2020-09-14,2020-09-14,,Ford v Ferrari,https://www.imdb.com/title/tt1950186/,movie,8.1,152,2019,"Action, Biography, Drama, Sport",432167,2019-08-30,James Mangold
22,tt2935510,2020-09-14,2020-09-14,,Ad Astra,https://www.imdb.com/title/tt2935510/,movie,6.5,123,2019,"Adventure, Drama, Mystery, Sci-Fi, Thriller",251210,2019-08-29,James Gray
23,tt4701182,2020-09-14,2020-09-14,,Bumblebee,https://www.imdb.com/title/tt4701182/,movie,6.7,114,2018,"Action, Adventure, Sci-Fi",181025,2018-12-03,Travis Knight
24,tt1051906,2020-09-14,2020-09-14,,The Invisible Man,https://www.imdb.com/title/tt1051906/,movie,7.1,124,2020,"Drama, Horror, Mystery, Sci-Fi, Thriller",241967,2020-02-24,Leigh Whannell
25,tt0113277,2020-09-14,2020-09-14,,Heat,https://www.imdb.com/title/tt0113277/,movie,8.3,170,1995,"Action, Crime, Drama",688470,1995-12-06,Michael Mann
26,tt0069995,2020-09-14,2020-09-14,,Don't Look Now,https://www.imdb.com/title/tt0069995/,movie,7.1,110,1973,"Drama, Horror, Mystery, Thriller",59600,1973-10-11,Nicolas Roeg
27,tt4575576,2020-09-14,2020-09-14,,Christopher Robin,https://www.imdb.com/title/tt4575576/,movie,7.2,104,2018,"Adventure, Comedy, Drama, Family, Fantasy, Musical",81837,2018-07-30,Marc Forster
28,tt0056869,2020-09-14,2020-09-14,,The Birds,https://www.imdb.com/title/tt0056869/,movie,7.6,119,1963,"Drama, Horror, Mystery, Romance",198163,1963-03-28,Alfred Hitchcock
29,tt1502397,2020-09-14,2020-09-14,,Bad Boys for Life,https://www.imdb.com/title/tt1502397/,movie,6.5,124,2020,"Action, Comedy, Crime, Thriller",169118,2020-01-07,"Adil El Arbi, Bilall Fallah"
30,tt0120188,2020-09-14,2020-09-14,,Three Kings,https://www.imdb.com/title/tt0120188/,movie,7.1,114,1999,"Action, Adventure, Comedy, Drama, War",177086,1999-09-27,David O. Russell
31,tt0120679,2020-09-14,2020-09-14,,Frida,https://www.imdb.com/title/tt0120679/,movie,7.3,123,2002,"Biography, Drama, Romance",93143,2002-08-29,Julie Taymor
32,tt3281548,2020-09-14,2020-09-14,,Little Women,https://www.imdb.com/title/tt3281548/,movie,7.8,135,2019,"Drama, Romance",226382,2019-12-07,Greta Gerwig
33,tt2179136,2020-09-14,2020-09-14,,American Sniper,https://www.imdb.com/title/tt2179136/,movie,7.3,133,2014,"Action, Biography, Drama, War",511314,2014-11-11,Clint Eastwood
34,tt2584384,2020-09-14,2020-09-14,,Jojo Rabbit,https://www.imdb.com/title/tt2584384/,movie,7.9,108,2019,"Comedy, Drama, War",418449,2019-09-08,Taika Waititi
35,tt1442578,2020-09-14,2020-09-14,,Reflexões de um Liquidificador,https://www.imdb.com/title/tt1442578/,movie,7.1,80,2010,"Comedy, Thriller",938,2010-08-09,André Klotzel
36,tt9777644,2020-09-14,2020-09-14,,Da 5 Bloods,https://www.imdb.com/title/tt9777644/,movie,6.5,154,2020,"Adventure, Drama, War",53883,2020-06-12,Spike Lee
37,tt1638355,2020-09-14,2020-09-14,,The Man from U.N.C.L.E.,https://www.imdb.com/title/tt1638355/,movie,7.2,116,2015,"Action, Adventure, Comedy",323338,2015-08-02,Guy Ritchie
38,tt0085933,2020-09-14,2020-09-14,,"Merry Christmas, Mr. Lawrence",https://www.imdb.com/title/tt0085933/,movie,7.2,123,1983,"Drama, War",19165,1983-05-11,Nagisa Ôshima
39,tt1606389,2020-09-14,2020-09-14,,The Vow,https://www.imdb.com/title/tt1606389/,movie,6.8,104,2012,"Drama, Romance",200270,2012-02-06,Michael Sucsy
40,tt12133722,2020-09-14,2020-09-14,,Have a Good Trip: Adventures in Psychedelics,https://www.imdb.com/title/tt12133722/,movie,6.8,85,2020,"Documentary, Comedy",8363,2020-05-11,Donick Cary
41,tt1343092,2020-09-14,2020-09-14,,The Great Gatsby,https://www.imdb.com/title/tt1343092/,movie,7.2,143,2013,"Drama, Romance",573416,2013-05-01,Baz Luhrmann
42,tt2283362,2020-09-14,2020-09-14,,Jumanji: Welcome to the Jungle,https://www.imdb.com/title/tt2283362/,movie,6.9,119,2017,"Action, Adventure, Comedy, Fantasy",403377,2017-12-05,Jake Kasdan
43,tt1809398,2020-09-14,2020-09-14,,Unbroken,https://www.imdb.com/title/tt1809398/,movie,7.2,137,2014,"Action, Biography, Drama, Sport, War",176892,2014-11-17,Angelina Jolie
44,tt1139797,2020-09-14,2020-09-14,,Låt den rätte komma in,https://www.imdb.com/title/tt1139797/,movie,7.9,114,2008,"Drama, Fantasy, Horror, Romance",222500,2008-01-26,Tomas Alfredson
45,tt5797184,2020-09-14,2020-09-14,,Escape from Pretoria,https://www.imdb.com/title/tt5797184/,movie,6.8,106,2020,"Biography, Crime, Mystery, Thriller",40935,2020-02-29,Francis Annan
46,tt1931533,2020-09-14,2020-09-14,,Seven Psychopaths,https://www.imdb.com/title/tt1931533/,movie,7.1,110,2012,"Comedy, Crime",268131,2012-09-07,Martin McDonagh
47,tt0870984,2020-09-14,2020-09-14,,Antichrist,https://www.imdb.com/title/tt0870984/,movie,6.5,108,2009,"Drama, Horror, Thriller",132350,2009-05-18,Lars von Trier
48,tt1937390,2020-09-14,2020-09-14,,Nymphomaniac: Vol. I,https://www.imdb.com/title/tt1937390/,movie,6.9,117,2013,Drama,128527,2013-12-25,Lars von Trier
49,tt2382009,2020-09-14,2020-09-14,,Nymphomaniac: Vol. II,https://www.imdb.com/title/tt2382009/,movie,6.6,124,2013,"Adult, Drama",95900,2013-12-25,Lars von Trier
50,tt8244784,2020-09-14,2020-09-14,,The Hunt,https://www.imdb.com/title/tt8244784/,movie,6.5,90,2020,"Action, Horror, Thriller",122357,2020-03-11,Craig Zobel
51,tt0805564,2020-09-14,2020-09-14,,Lars and the Real Girl,https://www.imdb.com/title/tt0805564/,movie,7.3,106,2007,"Comedy, Drama, Romance",150766,2007-09-16,Craig Gillespie
52,tt7798634,2020-09-14,2020-09-14,,Ready or Not,https://www.imdb.com/title/tt7798634/,movie,6.8,95,2019,"Action, Comedy, Horror, Mystery, Thriller",168570,2019-03-12,"Matt Bettinelli-Olpin, Tyler Gillett"
53,tt1862079,2020-09-14,2020-09-14,,Safety Not Guaranteed,https://www.imdb.com/title/tt1862079/,movie,6.9,86,2012,"Adventure, Comedy, Drama, Fantasy, Romance",128863,2012-01-22,Colin Trevorrow
54,tt1454468,2020-09-14,2020-09-14,,Gravity,https://www.imdb.com/title/tt1454468/,movie,7.7,91,2013,"Drama, Sci-Fi, Thriller",846093,2013-08-28,Alfonso Cuarón
55,tt7939766,2020-09-14,2020-09-14,,I'm Thinking of Ending Things,https://www.imdb.com/title/tt7939766/,movie,6.6,134,2020,"Drama, Thriller",94755,2020-08-28,Charlie Kaufman
56,tt0138704,2020-09-14,2020-09-14,,Pi,https://www.imdb.com/title/tt0138704/,movie,7.3,84,1998,"Drama, Horror, Mystery, Sci-Fi, Thriller",183693,1998-01-19,Darren Aronofsky
57,tt0053459,2020-09-14,2020-09-14,,Les yeux sans visage,https://www.imdb.com/title/tt0053459/,movie,7.6,90,1960,"Drama, Horror",33662,1960-01-11,Georges Franju
58,tt9071322,2020-09-14,2020-09-14,,Dark Waters,https://www.imdb.com/title/tt9071322/,movie,7.6,126,2019,"Biography, Drama, History, Mystery",95240,2019-11-12,Todd Haynes
59,tt1291584,2020-09-14,2020-09-14,,Warrior,https://www.imdb.com/title/tt1291584/,movie,8.1,140,2011,"Action, Drama, Sport",486084,2011-09-09,Gavin O'Connor
60,tt7395114,2020-09-20,2020-09-20,,The Devil All the Time,https://www.imdb.com/title/tt7395114/,movie,7.1,138,2020,"Crime, Drama, Thriller",145267,2020-09-10,Antonio Campos
61,tt0082096,2020-09-20,2020-09-20,,Das Boot,https://www.imdb.com/title/tt0082096/,movie,8.4,149,1981,"Drama, War",258010,1981-09-17,Wolfgang Petersen
62,tt1032755,2020-09-20,2020-09-20,,RocknRolla,https://www.imdb.com/title/tt1032755/,movie,7.2,114,2008,"Action, Crime, Thriller",260300,2008-09-04,Guy Ritchie
63,tt0060827,2020-09-23,2020-09-23,,Persona,https://www.imdb.com/title/tt0060827/,movie,8.1,85,1966,"Drama, Thriller",125808,1966-10-18,Ingmar Bergman
64,tt5776858,2020-09-30,2020-09-30,,Phantom Thread,https://www.imdb.com/title/tt5776858/,movie,7.4,130,2017,"Drama, History, Romance",139831,2017-12-11,Paul Thomas Anderson
65,tt7846844,2020-09-30,2020-09-30,,Enola Holmes,https://www.imdb.com/title/tt7846844/,movie,6.6,123,2020,"Action, Adventure, Crime, Drama, Mystery",208066,2020-09-23,Harry Bradbeer
66,tt0114558,2020-09-30,2020-09-30,,Strange Days,https://www.imdb.com/title/tt0114558/,movie,7.2,145,1995,"Crime, Drama, Sci-Fi, Thriller",76080,1995-09-03,Kathryn Bigelow
67,tt1439572,2020-10-05,2020-10-05,,Perfect Sense,https://www.imdb.com/title/tt1439572/,movie,7.0,92,2011,"Drama, Romance, Sci-Fi",62353,2011-01-24,David Mackenzie
68,tt0042876,2020-10-05,2020-10-05,,Rashômon,https://www.imdb.com/title/tt0042876/,movie,8.2,88,1950,"Crime, Drama, Mystery",174787,1950-08-26,Akira Kurosawa
69,tt1070874,2020-10-27,2020-10-27,,The Trial of the Chicago 7,https://www.imdb.com/title/tt1070874/,movie,7.7,129,2020,"Drama, History, Thriller",186832,2020-09-25,Aaron Sorkin
70,tt1486834,2020-10-27,2020-10-27,,The F Word,https://www.imdb.com/title/tt1486834/,movie,6.8,98,2013,"Comedy, Romance",80276,2013-09-07,Michael Dowse
71,tt1860242,2020-10-27,2020-10-27,,The Highwaymen,https://www.imdb.com/title/tt1860242/,movie,6.9,132,2019,"Biography, Crime, Drama, Mystery, Thriller",97698,2019-03-10,John Lee Hancock
72,tt3532216,2020-10-27,2020-10-27,,American Made,https://www.imdb.com/title/tt3532216/,movie,7.1,115,2017,"Action, Comedy, Crime, Drama",197004,2017-08-23,Doug Liman
73,tt1457767,2020-10-27,2020-10-27,,The Conjuring,https://www.imdb.com/title/tt1457767/,movie,7.5,112,2013,"Horror, Mystery, Thriller",532430,2013-06-08,James Wan
74,tt0365376,2020-10-27,2020-10-27,,"Janghwa, Hongryeon",https://www.imdb.com/title/tt0365376/,movie,7.1,114,2003,"Drama, Horror, Mystery, Thriller",65779,2003-06-13,Jee-woon Kim
75,tt2402927,2020-10-27,2020-10-27,,Carol,https://www.imdb.com/title/tt2402927/,movie,7.2,118,2015,Drama,136903,2015-05-17,Todd Haynes
76,tt0093779,2020-10-27,2020-10-27,,The Princess Bride,https://www.imdb.com/title/tt0093779/,movie,8.0,98,1987,"Adventure, Comedy, Family, Fantasy, Romance",439401,1987-09-18,Rob Reiner
77,tt0443453,2020-11-01,2020-11-01,,Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan,https://www.imdb.com/title/tt0443453/,movie,7.4,84,2006,Comedy,427698,2006-08-04,Larry Charles
78,tt13143964,2020-11-01,2020-11-01,,Borat Subsequent Moviefilm: Delivery of Prodigious Bribe to American Regime for Make Benefit Once Glorious Nation of Kazakhstan,https://www.imdb.com/title/tt13143964/,movie,6.6,95,2020,Comedy,147885,2020-10-23,Jason Woliner
79,tt0093822,2020-11-01,2020-11-01,,Raising Arizona,https://www.imdb.com/title/tt0093822/,movie,7.3,94,1987,"Comedy, Crime",145337,1987-03-06,"Ethan Coen, Joel Coen"
80,tt0420223,2020-11-01,2020-11-01,,Stranger Than Fiction,https://www.imdb.com/title/tt0420223/,movie,7.5,113,2006,"Comedy, Drama, Fantasy, Romance",233631,2006-09-09,Marc Forster
81,tt0053146,2020-11-01,2020-11-01,,Orfeu Negro,https://www.imdb.com/title/tt0053146/,movie,7.4,100,1959,"Drama, Musical, Romance",11894,1959-05-12,Marcel Camus
82,tt0377092,2020-11-05,2020-11-05,,Mean Girls,https://www.imdb.com/title/tt0377092/,movie,7.1,97,2004,Comedy,405915,2004-04-19,Mark Waters
83,tt0800325,2020-11-05,2020-11-05,,The Dirt,https://www.imdb.com/title/tt0800325/,movie,7.0,107,2019,"Biography, Comedy, Drama, Music",53156,2019-03-18,Jeff Tremaine
84,tt2190367,2020-11-05,2020-11-05,,O Som ao Redor,https://www.imdb.com/title/tt2190367/,movie,7.1,131,2012,"Drama, Thriller",8476,2012-02-01,Kleber Mendonça Filho
85,tt5912454,2020-11-05,2020-11-05,,Blue Jay,https://www.imdb.com/title/tt5912454/,movie,7.3,80,2016,"Drama, Romance",19423,2016-09-12,Alex Lehmann
86,tt5606664,2020-11-16,2020-11-16,,Doctor Sleep,https://www.imdb.com/title/tt5606664/,movie,7.3,152,2019,"Drama, Fantasy, Horror, Thriller",205515,2019-10-30,Mike Flanagan
87,tt0073629,2020-12-17,2020-12-17,,The Rocky Horror Picture Show,https://www.imdb.com/title/tt0073629/,movie,7.4,100,1975,"Comedy, Horror, Musical",159819,1975-08-14,Jim Sharman
1,tt2990140,2021-03-17,2021-03-17,,The Christmas Chronicles,https://www.imdb.com/title/tt2990140/,movie,7.0,104,2018,"Adventure, Comedy, Family, Fantasy",78353,2018-11-21,Clay Kaytis
2,tt2582576,2021-03-17,2021-03-17,,Sand Castle,https://www.imdb.com/title/tt2582576/,movie,6.3,113,2017,"Action, Drama, War",25794,2017-04-21,Fernando Coimbra
3,tt10539608,2021-03-17,2021-03-17,,The Midnight Sky,https://www.imdb.com/title/tt10539608/,movie,5.7,118,2020,"Adventure, Drama, Sci-Fi, Thriller",86965,2020-12-09,George Clooney
4,tt10310140,2021-03-17,2021-03-17,,Fatman,https://www.imdb.com/title/tt10310140/,movie,5.9,100,2020,"Action, Adventure, Comedy, Fantasy, Sci-Fi, Thriller",28133,2020-10-08,"Eshom Nelms, Ian Nelms"
5,tt7713068,2021-03-17,2021-03-17,,Birds of Prey and the Fantabulous Emancipation of One Harley Quinn,https://www.imdb.com/title/tt7713068/,movie,6.1,109,2020,"Action, Comedy, Crime",254333,2020-01-25,Cathy Yan
6,tt0427944,2021-03-17,2021-03-17,,Thank You for Smoking,https://www.imdb.com/title/tt0427944/,movie,7.5,92,2005,"Comedy, Drama",226161,2005-09-09,Jason Reitman
7,tt1305806,2021-03-17,2021-03-17,,El secreto de sus ojos,https://www.imdb.com/title/tt1305806/,movie,8.2,129,2009,"Drama, Mystery, Romance, Thriller",216249,2009-08-13,Juan José Campanella
8,tt1714915,2021-03-17,2021-03-17,,Only Lovers Left Alive,https://www.imdb.com/title/tt1714915/,movie,7.2,123,2013,"Comedy, Drama, Fantasy, Horror, Romance",104873,2013-05-25,Jim Jarmusch
9,tt0804497,2021-03-17,2021-03-17,,It's Kind of a Funny Story,https://www.imdb.com/title/tt0804497/,movie,7.1,101,2010,"Comedy, Drama, Romance",146234,2010-07-02,"Anna Boden, Ryan Fleck"
10,tt0366551,2021-03-17,2021-03-17,,Harold & Kumar Go to White Castle,https://www.imdb.com/title/tt0366551/,movie,7.0,88,2004,"Adventure, Comedy",202160,2004-05-20,Danny Leiner
11,tt9893250,2021-03-17,2021-03-17,,I Care a Lot,https://www.imdb.com/title/tt9893250/,movie,6.3,118,2020,"Comedy, Crime, Drama, Thriller",139683,2020-09-12,J Blakeson
12,tt1588170,2021-03-17,2021-03-17,,Ang-ma-reul bo-at-da,https://www.imdb.com/title/tt1588170/,movie,7.8,144,2010,"Action, Crime, Thriller",139441,2010-08-12,Jee-woon Kim
13,tt2870612,2021-03-17,2021-03-17,,"As Above, So Below",https://www.imdb.com/title/tt2870612/,movie,6.2,93,2014,"Horror, Mystery, Thriller",103822,2014-08-19,John Erick Dowdle
14,tt10618286,2021-04-07,2021-04-07,,Mank,https://www.imdb.com/title/tt10618286/,movie,6.8,131,2020,"Biography, Comedy, Drama",79375,2020-11-13,David Fincher
15,tt0758752,2021-04-07,2021-04-07,,Love & Other Drugs,https://www.imdb.com/title/tt0758752/,movie,6.7,112,2010,"Comedy, Drama, Romance",214459,2010-11-04,Edward Zwick
16,tt6723592,2021-04-07,2021-04-07,,Tenet,https://www.imdb.com/title/tt6723592/,movie,7.3,150,2020,"Action, Sci-Fi, Thriller",553562,2020-08-22,Christopher Nolan
17,tt4209788,2021-04-07,2021-04-07,,Molly's Game,https://www.imdb.com/title/tt4209788/,movie,7.4,140,2017,"Biography, Crime, Drama, Sport",181227,2017-09-08,Aaron Sorkin
18,tt5363618,2021-04-07,2021-04-07,,Sound of Metal,https://www.imdb.com/title/tt5363618/,movie,7.7,120,2019,"Drama, Music",140553,2019-09-06,Darius Marder
19,tt9620292,2021-04-07,2021-04-07,,Promising Young Woman,https://www.imdb.com/title/tt9620292/,movie,7.5,113,2020,"Crime, Drama, Mystery, Thriller",193155,2020-01-25,Emerald Fennell
20,tt0089881,2021-04-07,2021-04-07,,Ran,https://www.imdb.com/title/tt0089881/,movie,8.2,162,1985,"Action, Drama, War",131196,1985-05-25,Akira Kurosawa
21,tt10308928,2021-04-07,2021-04-07,,Force of Nature,https://www.imdb.com/title/tt10308928/,movie,4.6,91,2020,"Action, Crime, Drama, Thriller",12415,2020-06-17,Michael Polish
22,tt8633478,2021-06-02,2021-06-02,,Run,https://www.imdb.com/title/tt8633478/,movie,6.7,90,2020,"Mystery, Thriller",89271,2020-04-13,Aneesh Chaganty
23,tt9742794,2021-06-02,2021-06-02,,Way Down,https://www.imdb.com/title/tt9742794/,movie,6.4,118,2021,"Action, Adventure, Thriller",28742,2021-01-15,Jaume Balagueró
24,tt2222042,2021-06-02,2021-06-02,,Love and Monsters,https://www.imdb.com/title/tt2222042/,movie,6.9,109,2020,"Action, Adventure, Comedy, Fantasy, Sci-Fi",136416,2020-10-16,Michael Matthews
25,tt5034838,2021-06-02,2021-06-02,,Godzilla vs. Kong,https://www.imdb.com/title/tt5034838/,movie,6.3,113,2021,"Action, Sci-Fi, Thriller",223945,2021-03-24,Adam Wingard
26,tt9784798,2021-06-02,2021-06-02,,Judas and the Black Messiah,https://www.imdb.com/title/tt9784798/,movie,7.4,126,2021,"Biography, Drama, History",87182,2021-02-01,Shaka King
27,tt10633456,2021-06-02,2021-06-02,,Minari,https://www.imdb.com/title/tt10633456/,movie,7.4,115,2020,Drama,89772,2020-01-26,Lee Isaac Chung
28,tt9203694,2021-06-02,2021-06-02,,Stowaway,https://www.imdb.com/title/tt9203694/,movie,5.6,116,2021,"Adventure, Sci-Fi, Thriller",49808,2021-04-22,Joe Penna
29,tt0499097,2021-06-02,2021-06-02,,Without Remorse,https://www.imdb.com/title/tt0499097/,movie,5.8,109,2021,"Action, Thriller, War",62006,2021-04-30,Stefano Sollima
30,tt9770150,2021-06-02,2021-06-02,,Nomadland,https://www.imdb.com/title/tt9770150/,movie,7.3,107,2020,Drama,173298,2020-09-11,Chloé Zhao
31,tt7888964,2021-06-02,2021-06-02,,Nobody,https://www.imdb.com/title/tt7888964/,movie,7.4,92,2021,"Action, Crime, Drama, Thriller",301297,2021-03-18,Ilya Naishuller
32,tt0117665,2021-06-02,2021-06-02,,Sleepers,https://www.imdb.com/title/tt0117665/,movie,7.5,147,1996,"Crime, Drama, Thriller",231981,1996-08-28,Barry Levinson
33,tt1120985,2021-06-02,2021-06-02,,Blue Valentine,https://www.imdb.com/title/tt1120985/,movie,7.3,112,2010,"Drama, Romance",205392,2010-01-24,Derek Cianfrance
34,tt6111574,2021-06-02,2021-06-02,,The Woman in the Window,https://www.imdb.com/title/tt6111574/,movie,5.7,100,2021,"Crime, Drama, Mystery, Thriller",79874,2021-05-14,Joe Wright
35,tt6333060,2021-06-02,2021-06-02,,Icarus,https://www.imdb.com/title/tt6333060/,movie,7.9,120,2017,"Documentary, Sport",52817,2017-01-20,Bryan Fogel
36,tt10288566,2021-06-02,2021-06-02,,Druk,https://www.imdb.com/title/tt10288566/,movie,7.7,117,2020,Drama,179262,2020-09-12,Thomas Vinterberg
37,tt14217100,2021-06-02,2021-06-02,,Ferry,https://www.imdb.com/title/tt14217100/,movie,7.0,106,2021,"Action, Crime, Drama, Thriller",11881,2021-05-14,Cecilia Verheyden
38,tt14544192,2021-06-02,2021-06-02,,Bo Burnham: Inside,https://www.imdb.com/title/tt14544192/,tvSpecial,8.6,87,2021,"Comedy, Drama, Music",52143,2021-05-30,Bo Burnham
39,tt3062096,2021-07-28,2021-07-28,,Inferno,https://www.imdb.com/title/tt3062096/,movie,6.2,121,2016,"Action, Adventure, Crime, Drama, Mystery, Thriller",184164,2016-10-08,Ron Howard
40,tt6878306,2021-07-28,2021-07-28,,News of the World,https://www.imdb.com/title/tt6878306/,movie,6.8,118,2020,"Action, Adventure, Drama, Western",92540,2020-12-25,Paul Greengrass
41,tt11083552,2021-07-28,2021-07-28,,Wrath of Man,https://www.imdb.com/title/tt11083552/,movie,7.1,119,2021,"Action, Crime, Thriller",194846,2021-04-22,Guy Ritchie
42,tt3228774,2021-07-28,2021-07-28,,Cruella,https://www.imdb.com/title/tt3228774/,movie,7.3,134,2021,"Adventure, Comedy, Crime, Drama",249751,2021-05-18,Craig Gillespie
43,tt4733624,2021-07-28,2021-07-28,,Fatherhood,https://www.imdb.com/title/tt4733624/,movie,6.6,109,2021,"Comedy, Drama",40940,2021-06-18,Paul Weitz
44,tt9777666,2021-07-28,2021-07-28,,The Tomorrow War,https://www.imdb.com/title/tt9777666/,movie,6.5,138,2021,"Action, Adventure, Drama, Sci-Fi, Thriller",217842,2021-06-30,Chris McKay
45,tt0036775,2021-07-28,2021-07-28,,Double Indemnity,https://www.imdb.com/title/tt0036775/,movie,8.3,107,1944,"Crime, Drama, Film-Noir, Mystery, Thriller",162589,1944-04-24,Billy Wilder
46,tt7668870,2021-07-28,2021-07-28,,Searching,https://www.imdb.com/title/tt7668870/,movie,7.6,102,2018,"Drama, Mystery, Thriller",175000,2018-01-21,Aneesh Chaganty
47,tt0056058,2021-07-28,2021-07-28,,Seppuku,https://www.imdb.com/title/tt0056058/,movie,8.6,133,1962,"Action, Drama, Mystery",63023,1962-09-16,Masaki Kobayashi
48,tt2397535,2021-07-28,2021-07-28,,Predestination,https://www.imdb.com/title/tt2397535/,movie,7.4,97,2014,"Action, Drama, Sci-Fi, Thriller",293823,2014-03-08,"Michael Spierig, Peter Spierig"
49,tt1649419,2021-07-28,2021-07-28,,Lo imposible,https://www.imdb.com/title/tt1649419/,movie,7.5,114,2012,"Adventure, Drama, History, Thriller",233413,2012-09-09,J.A. Bayona
50,tt8332922,2021-07-28,2021-07-28,,A Quiet Place Part II,https://www.imdb.com/title/tt8332922/,movie,7.2,97,2020,"Drama, Horror, Sci-Fi, Thriller",255715,2020-03-08,John Krasinski
51,tt1355683,2021-07-28,2021-07-28,,Black Mass,https://www.imdb.com/title/tt1355683/,movie,6.9,123,2015,"Biography, Crime, Drama",187799,2015-09-04,Scott Cooper
52,tt11003218,2021-07-28,2021-07-28,,Pig,https://www.imdb.com/title/tt11003218/,movie,6.9,92,2021,"Drama, Mystery",83230,2021-07-16,Michael Sarnoski
53,tt10230994,2021-12-29,2021-12-29,,Beckett,https://www.imdb.com/title/tt10230994/,movie,5.7,110,2021,"Action, Crime, Drama, Thriller",27552,2021-08-04,Ferdinando Cito Filomarino
54,tt2499472,2021-12-29,2021-12-29,,Point Blank,https://www.imdb.com/title/tt2499472/,movie,5.7,86,2019,"Action, Crime, Drama, Thriller",15188,2019-07-12,Joe Lynch
55,tt2101341,2021-12-29,2021-12-29,,Dead Man Down,https://www.imdb.com/title/tt2101341/,movie,6.4,118,2013,"Action, Crime, Drama, Thriller",69348,2013-02-26,Niels Arden Oplev
56,tt6264654,2021-12-29,2021-12-29,,Free Guy,https://www.imdb.com/title/tt6264654/,movie,7.1,115,2021,"Action, Adventure, Comedy, Fantasy, Sci-Fi",399484,2021-08-10,Shawn Levy
57,tt8368512,2021-12-29,2021-12-29,,The Courier,https://www.imdb.com/title/tt8368512/,movie,7.2,112,2020,"Drama, History, Mystery, Thriller, War",68131,2020-01-24,Dominic Cooke
58,tt9243804,2021-12-29,2021-12-29,,The Green Knight,https://www.imdb.com/title/tt9243804/,movie,6.6,130,2021,"Adventure, Drama, Fantasy",109890,2021-07-29,David Lowery
59,tt1833116,2021-12-29,2021-12-29,,The Informer,https://www.imdb.com/title/tt1833116/,movie,6.6,113,2019,"Action, Crime, Drama, Thriller",40242,2019-08-30,Andrea Di Stefano
60,tt1160419,2021-12-29,2021-12-29,,Dune: Part One,https://www.imdb.com/title/tt1160419/,movie,8.0,155,2021,"Action, Adventure, Drama, Sci-Fi",707809,2021-09-03,Denis Villeneuve
61,tt1922777,2021-12-29,2021-12-29,,Sinister,https://www.imdb.com/title/tt1922777/,movie,6.8,110,2012,"Horror, Mystery, Thriller",267354,2012-03-11,Scott Derrickson
62,tt11456054,2021-12-29,2021-12-29,,Run Hide Fight,https://www.imdb.com/title/tt11456054/,movie,6.3,109,2020,"Action, Crime, Drama, Thriller",25853,2020-09-10,Kyle Rankin
63,tt5691670,2021-12-29,2021-12-29,,Under the Silver Lake,https://www.imdb.com/title/tt5691670/,movie,6.5,139,2018,"Crime, Drama, Mystery, Thriller",47619,2018-05-15,David Robert Mitchell
64,tt6079516,2021-12-29,2021-12-29,,I See You,https://www.imdb.com/title/tt6079516/,movie,6.8,98,2019,"Crime, Drama, Mystery, Thriller",61190,2019-03-11,Adam Randall
65,tt0993840,2021-12-29,2021-12-29,,Army of the Dead,https://www.imdb.com/title/tt0993840/,movie,5.8,148,2021,"Action, Crime, Drama, Horror, Sci-Fi, Thriller, War",180462,2021-05-14,Zack Snyder
66,tt0074486,2021-12-29,2021-12-29,,Eraserhead,https://www.imdb.com/title/tt0074486/,movie,7.3,89,1977,"Fantasy, Horror",122716,1977-03-19,David Lynch
67,tt0245712,2021-12-29,2021-12-29,,Amores perros,https://www.imdb.com/title/tt0245712/,movie,8.1,154,2000,"Drama, Thriller",247441,2000-05-14,Alejandro G. Iñárritu
68,tt7991608,2021-12-29,2021-12-29,,Red Notice,https://www.imdb.com/title/tt7991608/,movie,6.3,118,2021,"Action, Comedy, Thriller",298126,2021-11-04,Rawson Marshall Thurber
69,tt0884328,2021-12-29,2021-12-29,,The Mist,https://www.imdb.com/title/tt0884328/,movie,7.1,126,2007,"Horror, Sci-Fi, Thriller",326702,2007-05-09,Frank Darabont
70,tt11233960,2021-12-29,2021-12-29,,The Unforgivable,https://www.imdb.com/title/tt11233960/,movie,7.1,112,2021,"Crime, Drama",115104,2021-11-24,Nora Fingscheidt
71,tt10954652,2021-12-29,2021-12-29,,Old,https://www.imdb.com/title/tt10954652/,movie,5.8,108,2021,"Drama, Horror, Mystery, Thriller",145860,2021-07-21,M. Night Shyamalan
72,tt4062536,2021-12-29,2021-12-29,,Green Room,https://www.imdb.com/title/tt4062536/,movie,7.0,95,2015,"Crime, Drama, Horror, Music, Thriller",133351,2015-05-17,Jeremy Saulnier
73,tt11286314,2021-12-29,2021-12-29,,Don't Look Up,https://www.imdb.com/title/tt11286314/,movie,7.2,138,2021,"Comedy, Drama, Sci-Fi",568085,2021-12-05,Adam McKay
74,tt0263124,2021-12-29,2021-12-29,,Bicho de Sete Cabeças,https://www.imdb.com/title/tt0263124/,movie,7.7,74,2000,Drama,6070,2000-11-30,Laís Bodanzky
75,tt8980602,2021-12-29,2021-12-29,,The Kid Detective,https://www.imdb.com/title/tt8980602/,movie,7.0,100,2020,"Comedy, Drama, Mystery",20980,2020-09-13,Evan Morgan
76,tt2639336,2021-12-29,2021-12-29,,Greta,https://www.imdb.com/title/tt2639336/,movie,6.0,98,2018,"Drama, Mystery, Thriller",36522,2018-09-06,Neil Jordan
77,tt0057565,2021-12-29,2021-12-29,,Tengoku to jigoku,https://www.imdb.com/title/tt0057565/,movie,8.4,143,1963,"Crime, Drama, Mystery, Thriller",49199,1963-03-01,Akira Kurosawa
78,tt0105695,2021-12-30,2021-12-30,,Unforgiven,https://www.imdb.com/title/tt0105695/,movie,8.2,130,1992,"Drama, Western",424984,1992-08-03,Clint Eastwood
79,tt0050986,2021-12-30,2021-12-30,,Smultronstället,https://www.imdb.com/title/tt0050986/,movie,8.1,91,1957,"Drama, Romance",111422,1957-12-26,Ingmar Bergman
80,tt0074958,2021-12-30,2021-12-30,,Network,https://www.imdb.com/title/tt0074958/,movie,8.1,121,1976,Drama,165110,1976-11-14,Sidney Lumet
1,tt0327597,2022-06-21,2022-06-21,,Coraline,https://www.imdb.com/title/tt0327597/,movie,7.7,100,2009,"Animation, Drama, Family, Fantasy",248800,2009-02-05,Henry Selick
2,tt4244994,2022-06-21,2022-06-21,,The Last Duel,https://www.imdb.com/title/tt4244994/,movie,7.4,152,2021,"Action, Drama, History, Thriller",169603,2021-09-10,Ridley Scott
3,tt0112913,2022-06-21,2022-06-21,,Do lok tin si,https://www.imdb.com/title/tt0112913/,movie,7.6,99,1995,"Comedy, Crime, Drama, Romance",46133,1995-09-06,Kar-Wai Wong
4,tt8847712,2022-06-21,2022-06-21,,The French Dispatch,https://www.imdb.com/title/tt8847712/,movie,7.1,107,2021,"Comedy, Drama, Romance",140087,2021-07-12,Wes Anderson
5,tt4513678,2022-06-21,2022-06-21,,Ghostbusters: Afterlife,https://www.imdb.com/title/tt4513678/,movie,7.1,124,2021,"Adventure, Comedy, Fantasy, Sci-Fi",196971,2021-10-08,Jason Reitman
6,tt10293406,2022-06-21,2022-06-21,,The Power of the Dog,https://www.imdb.com/title/tt10293406/,movie,6.8,126,2021,"Drama, Western",185797,2021-09-02,Jane Campion
7,tt9639470,2022-06-21,2022-06-21,,Last Night in Soho,https://www.imdb.com/title/tt9639470/,movie,7.0,116,2021,"Drama, Horror, Mystery, Thriller",156624,2021-09-04,Edgar Wright
8,tt10872600,2022-06-21,2022-06-21,,Spider-Man: No Way Home,https://www.imdb.com/title/tt10872600/,movie,8.2,148,2021,"Action, Adventure, Fantasy, Sci-Fi",824283,2021-12-13,Jon Watts
9,tt2463208,2022-06-21,2022-06-21,,The Adam Project,https://www.imdb.com/title/tt2463208/,movie,6.7,106,2022,"Action, Adventure, Comedy, Sci-Fi",218566,2022-02-28,Shawn Levy
10,tt4123430,2022-06-21,2022-06-21,,Fantastic Beasts: The Crimes of Grindelwald,https://www.imdb.com/title/tt4123430/,movie,6.5,134,2018,"Adventure, Family, Fantasy",297539,2018-11-08,David Yates
11,tt4123432,2022-06-21,2022-06-21,,Fantastic Beasts: The Secrets of Dumbledore,https://www.imdb.com/title/tt4123432/,movie,6.2,142,2022,"Adventure, Family, Fantasy",157007,2022-04-06,David Yates
12,tt14992922,2022-06-21,2022-06-21,,The Tinder Swindler,https://www.imdb.com/title/tt14992922/,movie,7.1,114,2022,"Documentary, Crime",70056,2022-02-02,Felicity Morris
13,tt2953050,2022-06-21,2022-06-21,,Encanto,https://www.imdb.com/title/tt2953050/,movie,7.2,102,2021,"Animation, Comedy, Family, Fantasy, Musical",243022,2021-11-03,"Jared Bush, Charise Castro Smith, Byron Howard"
14,tt16116174,2022-06-21,2022-06-21,,Harry Potter 20th Anniversary: Return to Hogwarts,https://www.imdb.com/title/tt16116174/,tvSpecial,8.0,102,2022,"Documentary, Family",44747,2022-01-01,"Casey Patterson, Joe Pearlman, Eran Creevy, Giorgio Testi"
15,tt11337862,2022-06-21,2022-06-21,,Friends: The Reunion,https://www.imdb.com/title/tt11337862/,tvSpecial,8.0,104,2021,"Documentary, Biography, Comedy, History",62429,2021-05-27,"Russell Norman, Ben Winston"
16,tt7657566,2022-06-21,2022-06-21,,Death on the Nile,https://www.imdb.com/title/tt7657566/,movie,6.3,127,2022,"Crime, Drama, Mystery",166413,2022-02-09,Kenneth Branagh
17,tt1877830,2022-06-21,2022-06-21,,The Batman,https://www.imdb.com/title/tt1877830/,movie,7.8,176,2022,"Action, Crime, Drama, Thriller",722167,2022-03-01,Matt Reeves
18,tt13822738,2022-06-21,2022-06-21,,Loin du périph,https://www.imdb.com/title/tt13822738/,movie,5.7,119,2022,"Action, Comedy, Crime, Drama",8128,2022-05-06,Louis Leterrier
19,tt6710474,2022-06-21,2022-06-21,,Everything Everywhere All at Once,https://www.imdb.com/title/tt6710474/,movie,7.8,139,2022,"Action, Adventure, Comedy, Fantasy, Sci-Fi",472654,2022-03-11,"Daniel Kwan, Daniel Scheinert"
20,tt11138512,2022-06-21,2022-06-21,,The Northman,https://www.imdb.com/title/tt11138512/,movie,7.0,137,2022,"Action, Adventure, Drama, Fantasy, History, Thriller",234131,2022-04-01,Robert Eggers
21,tt14174940,2022-06-21,2022-06-21,,Interceptor,https://www.imdb.com/title/tt14174940/,movie,4.6,99,2022,"Action, Adventure, Drama, Thriller",26210,2022-06-03,Matthew Reilly
22,tt10370710,2022-06-21,2022-06-21,,Verdens verste menneske,https://www.imdb.com/title/tt10370710/,movie,7.8,128,2021,"Comedy, Drama, Romance",83940,2021-02-04,Joachim Trier
1,tt1649418,2023-05-01,2023-05-01,,The Gray Man,https://www.imdb.com/title/tt1649418/,movie,6.5,122,2022,"Action, Thriller",223412,2022-07-13,"Anthony Russo, Joe Russo"
2,tt1464335,2023-05-01,2023-05-01,,Uncharted,https://www.imdb.com/title/tt1464335/,movie,6.3,116,2022,"Action, Adventure",235324,2022-02-08,Ruben Fleischer
3,tt11032374,2023-05-01,2023-05-01,,Kimetsu no Yaiba: Mugen Ressha-Hen,https://www.imdb.com/title/tt11032374/,movie,8.2,117,2020,"Animation, Action, Adventure, Fantasy, Thriller",67093,2020-10-16,Haruo Sotozaki
4,tt8747460,2023-05-01,2023-05-01,,Eduardo e Mônica,https://www.imdb.com/title/tt8747460/,movie,7.4,114,2020,"Drama, Romance",1301,2020-03-08,René Sampaio
5,tt16027944,2023-05-01,2023-05-01,,Depois do Universo,https://www.imdb.com/title/tt16027944/,movie,6.6,126,2022,"Comedy, Drama, Romance",2082,2022-10-27,Diego Freitas
6,tt4595186,2023-05-01,2023-05-01,,Luckiest Girl Alive,https://www.imdb.com/title/tt4595186/,movie,6.4,113,2022,"Drama, Mystery, Thriller",52670,2022-09-30,Mike Barker
7,tt1638002,2023-05-01,2023-05-01,,"Love, Rosie",https://www.imdb.com/title/tt1638002/,movie,7.1,102,2014,"Comedy, Romance",149743,2014-10-06,Christian Ditter
8,tt9288822,2023-05-01,2023-05-01,,The Wonder,https://www.imdb.com/title/tt9288822/,movie,6.6,108,2022,"Drama, Mystery, Thriller",39781,2022-09-02,Sebastián Lelio
9,tt10954984,2023-05-01,2023-05-01,,Nope,https://www.imdb.com/title/tt10954984/,movie,6.8,130,2022,"Horror, Mystery, Sci-Fi, Thriller",240671,2022-07-18,Jordan Peele
10,tt15791034,2023-05-01,2023-05-01,,Barbarian,https://www.imdb.com/title/tt15791034/,movie,7.0,102,2022,"Horror, Mystery, Thriller",157005,2022-08-29,Zach Cregger
11,tt7144666,2023-05-01,2023-05-01,,The Black Phone,https://www.imdb.com/title/tt7144666/,movie,6.9,103,2021,"Horror, Thriller",173339,2021-09-25,Scott Derrickson
12,tt13560574,2023-05-01,2023-05-01,,X,https://www.imdb.com/title/tt13560574/,movie,6.6,105,2022,"Horror, Mystery, Thriller",140727,2022-03-13,Ti West
13,tt18925334,2023-05-01,2023-05-01,,Pearl,https://www.imdb.com/title/tt18925334/,movie,7.0,103,2022,"Drama, Horror, Thriller",68171,2022-09-03,Ti West
14,tt11564570,2023-05-01,2023-05-01,,Glass Onion,https://www.imdb.com/title/tt11564570/,movie,7.1,139,2022,"Comedy, Crime, Drama, Mystery, Thriller",407152,2022-09-13,Rian Johnson
15,tt0063350,2023-05-01,2023-05-01,,Night of the Living Dead,https://www.imdb.com/title/tt0063350/,movie,7.8,96,1968,"Horror, Thriller",134376,1968-10-01,George A. Romero
16,tt0359950,2023-05-01,2023-05-01,,The Secret Life of Walter Mitty,https://www.imdb.com/title/tt0359950/,movie,7.3,114,2013,"Adventure, Comedy, Drama, Fantasy, Romance",329369,2013-10-05,Ben Stiller
17,tt7322224,2023-06-17,2023-06-17,,Triangle of Sadness,https://www.imdb.com/title/tt7322224/,movie,7.3,147,2022,"Comedy, Drama",150364,2022-05-21,Ruben Östlund
18,tt9362722,2023-06-17,2023-06-17,,Spider-Man: Across the Spider-Verse,https://www.imdb.com/title/tt9362722/,movie,8.8,140,2023,"Animation, Action, Adventure, Fantasy, Sci-Fi",230756,2023-05-31,"Justin K. Thompson, Kemp Powers, Joaquim Dos Santos"
19,tt1517268,2023-08-17,2023-08-17,,Barbie,https://www.imdb.com/title/tt1517268/,movie,7.4,114,2023,"Adventure, Comedy, Fantasy, Romance",244505,2023-07-09,Greta Gerwig
20,tt12593682,2023-08-17,2023-08-17,,Bullet Train,https://www.imdb.com/title/tt12593682/,movie,7.3,127,2022,"Action, Comedy, Thriller",380065,2022-07-18,David Leitch
21,tt15398776,2023-08-17,2023-08-17,,Oppenheimer,https://www.imdb.com/title/tt15398776/,movie,8.6,180,2023,"Biography, Drama, History",365606,2023-07-11,Christopher Nolan
`;

const lines = csvData.split("\n");
const headers = lines[0].split(",");

// Find the indices of the required columns
const titleIndex = headers.indexOf("Title");
const yearIndex = headers.indexOf("Year");
const createdIndex = headers.indexOf("Created");
const imdbIDIndex = headers.indexOf("Const");

// Initialize the converted data with the headers
let convertedData = `Title,Year,WatchedDate,imdbID\n`;

// Process each line of CSV data (excluding the header)
for (let i = 1; i < lines.length; i++) {
  // Use a custom CSV parsing function to handle commas within values
  const values = parseCSVLine(lines[i]);

  const title = values[titleIndex];
  const year = values[yearIndex];
  const watchedDate = values[createdIndex];
  const imdbID = values[imdbIDIndex];

  if (title) {
    // Construct the converted line in the Letterboxd format
    const convertedLine = `"${title}",${year},${watchedDate},${imdbID},\n`;

    // Append the converted line to the converted data
    convertedData += convertedLine;
  }
}

console.log(convertedData);

// Custom CSV parsing function to handle commas within values
function parseCSVLine(line) {
  const values = [];
  let current = "";
  let withinQuotes = false;

  for (let char of line) {
    if (char === "," && !withinQuotes) {
      values.push(current);
      current = "";
    } else if (char === '"') {
      withinQuotes = !withinQuotes;
    } else {
      current += char;
    }
  }

  values.push(current);
  return values;
}
