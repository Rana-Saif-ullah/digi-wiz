<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "your_email@gmail.com"; // Replace with your Gmail address
    $subject = $_POST['subject'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $serviceType = $_POST['service_type'];

    $message = "Name: $name\r\nEmail: $email\r\nSubject: $subject\r\nService Type: $serviceType";

    // Headers
    $headers = "From: $name <$email>\r\nReply-To: $email\r\nContent-type: text/plain";

    // Send email
    mail($to, $subject, $message, $headers);

    // Redirect back to the contact page or any confirmation page
    header("Location: contact.html");
} else {
    // Redirect to an error page if accessed directly
    header("Location: error.html");
}
?>
