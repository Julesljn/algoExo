<?php

class Solution {

    function strStr(string $haystack, string $needle) {
        return ($response = strpos($haystack, $needle)) === false ? -1 : $response;
    }
}