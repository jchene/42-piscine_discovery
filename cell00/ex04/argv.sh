if [ $# == 0 ]; then
	echo "No arguments supplied"
	exit
fi
((i=0))
for arg in $@; do
	if [ "$i" -lt "3" ]; then
		echo $arg
	fi
	((i=i+1))
done