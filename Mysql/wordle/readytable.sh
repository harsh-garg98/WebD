#!/bin/bash
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
FILE="$SCRIPT_DIR/../data/fiveletterwords.txt"
OUTFILE="$SCRIPT_DIR/../data/wordledb.txt"

count=0
while read -r word
do
    echo -n -e "$word\t"
    echo "$word" | grep -o . | tr '\n' '\t'
    for c in {a..z}
    do
        echo -n -e "`echo "$word" | grep -io "$c" | wc -l`\t"
    done
    echo ""
    count=$((count+1))
    if (( $count % 100 == 0 ))
    then
        >&2 echo "read $count entries"
    fi
done < "$FILE" > "$OUTFILE"
