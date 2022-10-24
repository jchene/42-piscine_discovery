if [ $# == 0 ]; then
	echo "No arguments supplied"
	exit
fi
((i=0))
for arg in $@; do
	mkdir $(echo "ex"$arg)
	((i=i+1))
done