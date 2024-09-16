<?php

class Solution {

function searchInsert($nums, $target) {
    $keys = array_search($target, $nums);
    if($keys !== false) {
        return $keys;
    }
    for($i = 0; $i < count($nums); $i++) {
        if($target < $nums[$i]) {
            return $i;
        }
    }
    return count($nums);
}
}

// Refaire en découpent le millieu du tableau à chaque fois et cherchez en fonction de la target dans le premier milleu ou deuxième
// Si la target et le millieu --> return