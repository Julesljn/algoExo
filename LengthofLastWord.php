<?php 

class Solution {

    function lengthOfLastWord($s) {
        return strlen(end(array_filter(explode(' ' ,$s))));
    }
}