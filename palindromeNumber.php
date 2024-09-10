<?php

class Solution {

function isPalindrome($x) {
    $number = str_split((string)$x);
    return ($number === array_reverse($number)) ? true : false;
}
}