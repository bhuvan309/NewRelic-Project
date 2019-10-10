<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Scrum question</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">question</th>
      <th style="text-align:left">answer</th>
    </tr>
    <xsl:for-each select="tutorial/content">
    <tr>
      <td><xsl:value-of select="question"/></td>
      <td><xsl:value-of select="answer"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>