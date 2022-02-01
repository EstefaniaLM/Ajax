<?php
$mysqli = new mysqli("localhost", "root", "sa", "alumnos");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT * FROM personas WHERE id = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $nombre, $apellido, $f_nacimiento);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>CustomerID</th>";
echo "<td>" . $id . "</td>";
echo "<th>Nombre</th>";
echo "<td>" . $nombre . "</td>";
echo "<th>Apellido</th>";
echo "<td>" . $apellido . "</td>";
echo "<th>Fecha nacimiento</th>";
echo "<td>" . $f_nacimiento . "</td>";
echo "</tr>";
echo "</table>";

