<%--
  -- Universidad Industrial de Santander
  -- Grupo de Desarrollo de Software Calumet
  -- Realtime-client | AES Encrypt and Decrypt (JSP)
  -- Romel Pérez, prhone.blogspot.com
  -- 2015
  --%>
<%@page import="java.security.MessageDigest"%>
<%@page import="javax.crypto.Cipher"%>
<%@page import="javax.crypto.spec.IvParameterSpec"%>
<%@page import="javax.crypto.spec.SecretKeySpec"%>
<%@page import="javax.xml.bind.DatatypeConverter"%>
<%
  // Realtime - Proceso de autenticación.
  String rtCookieName = "COOKIE_NAME";
  String rtKey = "PRIVATE_KEY";
  String rtMsg = "ENCRIPTAR";
  String rtCode = "ENCRIPTADO";

  // IMPORTANT: antes de ejecutar el script, se deben seguir los siguientes
  // pasos y reiniciar el servidor:
  // http://deveshsharma.info/2012/10/09/fixing-java-security-invalidkeyexception-illegal-key-size-exception/

  // Crear código.
  try {
    byte[] iv = "0000000000000000".getBytes();
    byte[] input = rtMsg.getBytes("utf-8");

    MessageDigest md = MessageDigest.getInstance("SHA-256");
    byte[] thedigest = md.digest(rtKey.getBytes("utf-8"));
    SecretKeySpec skc = new SecretKeySpec(thedigest, "AES");
    Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
    cipher.init(Cipher.ENCRYPT_MODE, skc, new IvParameterSpec(iv));

    byte[] cipherText = new byte[cipher.getOutputSize(input.length)];
    int ctLength = cipher.update(input, 0, input.length, cipherText, 0);
    ctLength += cipher.doFinal(cipherText, ctLength);
    rtCode = DatatypeConverter.printHexBinary(cipherText);
  } catch (Exception ex) {
    rtCode = "ERROR_CODE";
  }

  // Creando cookie.
  Cookie rtCookie = new Cookie(rtCookieName, rtCode);
  rtCookie.setPath("/");

  // Agregando cookie.
  response.addCookie(rtCookie);
%>
