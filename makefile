#
# makefile
# jkirchartz, 2017-06-28 23:04
#

all:
				pandoc -fmarkdown-implicit_figures --latex-engine=xelatex -V geometry:margin=1.8cm --include-in-header=./options.tex -o JKirchartz-Resume.pdf JKirchartz-Resume.md


html:
				pandoc -fmarkdown-implicit_figures --css=./css/style.css -o JKirchartz-Resume.html JKirchartz-Resume.md


# vim:ft=make
#
