<?php


class Example
{
    public $name='Mosiur Rahman';
    protected $city='Dhaka';
    private $country='Bangladesh';
    private $value;

    public function __construct() {
//        echo "In construct";
    }


    public function addition() {
        echo 'in addition';
    }

    protected function subtraction() {
        echo 'in subtraction';
    }

    private function division() {
        echo 'In division';
    }


}
