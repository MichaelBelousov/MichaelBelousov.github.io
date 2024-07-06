find -E . -maxdepth 1 -not -regex '.*(CNAME|nojekyll|src|README|git|clean|bubble|godot-json-dialogue).*' -exec rm -r {} \;
