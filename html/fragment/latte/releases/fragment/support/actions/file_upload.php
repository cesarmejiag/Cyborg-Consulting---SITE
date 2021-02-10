<?php


/**
 * Uploader
 *
 * Necessary variables are
 *
 * name - Entity name
 * id - Entity id
 * [File data]
 *
 */

// Initialize fragment
include  __DIR__ . "/fragment_init.php";

// Extract name of owner entity
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);

// Extract id of owner
$id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);

// Validate variables
if($name == null || $id == null){
    die("Params ERROR");
}

if($id < 1){
    $id = -1; // Mark for later linking
}

// Get owner of file
try {
    $owner = DataRecord::byAuto($name, $id);
} catch (Exception $e) {
}

// Check for permissions
if((!Session::me()->isRoot())){
    if (
        ($owner instanceof Page && !$owner->canIWrite()) ||
        ($owner instanceof File && !$owner->canIEdit())

    ){
        die("upload: Can't save file. You Don't have necessary permissions");
    }
}

// Process files
try {
    $extra = array(
        'idparent' => 0,
        'width' => 1,
        'height' => 1,
        'key' => '[key]' ,
        'bucket' => 'page'
    );

    $files = File::createFiles($name, $id, $extra);

} catch (Exception $e) {
}

// Echo response with files
echo json_encode(array(new DataLatteResponse(DataRecord::packArray($files))));