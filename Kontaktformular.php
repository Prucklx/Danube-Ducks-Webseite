<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Werte aus dem Formular holen und HTML-Sonderzeichen entschärfen
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $privacy = isset($_POST['privacy']); // Überprüft, ob die Checkbox aktiviert ist

    // Fehlernachricht, die angezeigt wird, falls ein Pflichtfeld leer ist
    $error_message = "";

    // Überprüfen, ob die Pflichtfelder ausgefüllt wurden
    if (empty($name) || empty($email) || empty($message)) {
        $error_message .= "Bitte füllen Sie alle Pflichtfelder aus: Name, E-Mail und Nachricht.<br>";
    }

    // Überprüfen, ob die Datenschutz-Checkbox aktiviert ist
    if (!$privacy) {
        $error_message .= "Bitte bestätigen Sie die Datenschutzrichtlinien.<br>";
    }

    // Wenn keine Fehler gefunden wurden, die E-Mail senden
    if (empty($error_message)) {
        $to = "dprueckl03@gmail.com"; // Ziel-E-Mail-Adresse
        $subject = "Neue Nachricht vom Kontaktformular";
        $email_message = "Name: " . $name . "\n";
        $email_message .= "E-Mail: " . $email . "\n";
        $email_message .= "Nachricht: " . $message;
        $headers = "From: no-reply@duckslinz.com";

        if (mail($to, $subject, $email_message, $headers)) {
            echo "E-Mail erfolgreich gesendet.";
        } else {
            echo "Fehler beim Senden der E-Mail.";
        }
    } else {
        // Fehlermeldung ausgeben, wenn Pflichtfelder leer sind oder Checkbox nicht aktiviert ist
        echo $error_message;
    }
}
?>

