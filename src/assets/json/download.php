<?php

set_error_handler('exceptions_error_handler');

function exceptions_error_handler($severity, $message, $filename, $lineno) 
{
  if (error_reporting() == 0) {
    return;
  }
  if (error_reporting() & $severity) {
    throw new ErrorException($message, 0, $severity, $filename, $lineno);
  }
}

?>


<?php
$json = file_get_contents('contenuto.json');
$obj = json_decode($json);



$output = [];

foreach ($obj as $key => $value) 
{
	$id = $value->Id;
	



	//Scarico il contenuto delle pagine da wikipedia
	$contenuto_json = file_get_contents($value->Contenuto);
	$contenuto_arr = json_decode($contenuto_json, true);
	
	$contenuto=$id;
	
	try {
			$key = array_keys($contenuto_arr["query"]["pages"])[0];
			$contenuto = $contenuto_arr["query"]["pages"][$key]["extract"];
		}
		catch(Exception $e) 
		{
			echo $contenuto;
		}
	

	
	//Scarico il thumbnail delle immagini da wikipedia
	$immagine_json = file_get_contents($value->Immagine);
	$immagine_arr = json_decode($immagine_json, true);
	
	$immagine=$id;
	
	try {
			$key = array_keys($immagine_arr["query"]["pages"])[0];
			//$immagine_url = $immagine_arr["query"]["pages"][$key]["thumbnail"]["source"];
			//$immagine= pathinfo($immagine_url)['filename'];
			$immagine = $immagine_arr["query"]["pages"][$key]["pageimage"];
			?> 
			<!--img src="<?php //echo($immagine)?>"-->	
			<?php
			
			
		}

		catch(Exception $e) 
		{
			echo $immagine;
		}
		
		
	set_time_limit(400);	
	
	array_push($output, [$id, $contenuto,$immagine]);

}

$fp = fopen('drink_dati.json', 'w');
fwrite($fp, json_encode($output));
fclose($fp);

?>