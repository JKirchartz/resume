#
# makefile
# jkirchartz, 2017-06-28 23:04
#

all:
				pandoc ./in/*.md -fmarkdown-implicit_figures --smart --latex-engine=xelatex -V geometry:margin=1cm --include-in-header=./in/options.tex -o ./out/JKirchartz-Resume.pdf

tex:
				pandoc ./in/*.md -fmarkdown-implicit_figures --smart --latex-engine=xelatex -V geometry:margin=1cm --include-in-header=./in/options.tex -o ./out/JKirchartz-Resume.tex

verbose:
				pandoc ./in/*.md --verbose -fmarkdown-implicit_figures --smart --latex-engine=xelatex -V geometry:margin=1cm --include-in-header=./in/options.tex -o ./out/JKirchartz-Resume.pdf

# vim:ft=make
#
