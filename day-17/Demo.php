<?php
require_once 'Example.php';

class Demo extends Example
{
    public $age=22;
    protected $location = "Farmgate";
    private $mobilew = '01817161514';

    public function newOne() {
//        echo 'In new one';
        $this->subtraction();
    }

    protected function newTwo() {
        echo 'In new two';
    }

    private function newThree() {
        echo 'In new three';
    }
}

