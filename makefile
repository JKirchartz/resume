#
# makefile
# jkirchartz, 2017-06-28 23:04
#

all:
				pandoc -fmarkdown-implicit_figures --latex-engine=xelatex -V geometry:margin=1.8cm --include-in-header=./options.tex -o JKirchartz-Resume.pdf JKirchartz-Resume.md


# vim:ft=make
#
