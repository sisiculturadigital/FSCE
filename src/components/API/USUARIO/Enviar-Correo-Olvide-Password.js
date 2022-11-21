import { urlFSCE } from "../url-API";

export const recoverPassword = async (email) => {
    
    const response = fetch(`${urlFSCE}/publico/u/enviarcorreo/pass`, {  
        method: 'POST', 
        body: JSON.stringify(
            {
                to     :  email,
                subject: "RECUPERACION DE CONTRASEÑA",
                message: messageBody(email)
            }
        ), 
        headers: { 
            "Content-type": "application/json", 
            "Access-Control-Allow-Origin": "*" 
        } 
    })
    return response
}

const messageBody = (email) => {
    let template = `
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="sintent-Type" sintent="text/html charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" sintent="IE=edge">
    <meta name="viewport" sintent="width=device-width, initial-scale=1.0">
    <title>FSCE</title>
    <style type="text/css">
        /**
         * Avoid browser level font resizing.
         * 1. Windows Mobile
         * 2. iOS / OSX
         */
        body,
        table,
        td,
        a {
            -ms-text-size-adjust: 100%;
            /* 1 */
            -webkit-text-size-adjust: 100%;
            /* 2 */
        }

        /**
         * Remove extra space added to tables and cells in Outlook.
         */
        table,
        td {
            mso-table-rspace: 0pt;
            mso-table-lspace: 0pt;
        }

        /**
         * Better fluid images in Internet Explorer.
         */
        img {
            -ms-interpolation-mode: bicubic;
        }

        /**
         * Remove blue links for iOS devices.
         */
        a[x-apple-data-detectors] {
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            color: inherit !important;
            text-decoration: none !important;
        }

        /**
         * Fix centering issues in Android 4.4.
         */
        div[style*="margin: 16px 0;"] {
            margin: 0 !important;
        }

        body {
            width: 100% !important;
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
        }

        /**
         * Collapse table borders to avoid space between cells.
         */
        table {
            border-collapse: collapse !important;
        }
    </style>
</head>

<body marginheight="0" marginwidth="0" topmargin="0" rightmargin="0" leftmargin="0" bgcolor="#FFFFFF" yahoo="fix"
    yahoofix>
    <!-- start table -->
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center" valign="top" bgcolor="#FFFFFF">
                <!-- body sintent -->
                <table width="600" align="center" border="0" cellspacing="0" cellpadding="0">
                    <!-- start header section -->
                    <tr>
                        <td width="600" align="center" valign="top" bgcolor="#FFFFFF">
                            <table width="600" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="start" valign="top">
                                        <img src="https://raw.githubusercontent.com/sisiculturadigital/FSCE/feature/vistasRolComun/src/imgs/mailing/banner-header.png" style="vertical-align: top;" width="442">
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <!-- end header section -->
                    <tr height="60"></tr>
                    <tr>
                        <td align="center" bgcolor="#FFFFFF" style="background-color: #FFFFFF;color: #464E5F;font-family: Arial, Helvetica, sans-serif; font-size: 20px;font-weight: 900;line-height: 20px; margin: 30px 0;">
                            <span style="font-family: 'Arial';
                            font-style: normal;
                            font-size: 20px;
                            line-height: 16px;
                            text-align: center;
                            margin: 30px 0;
                            ">
                            <b>RECUPERACIÓN DE CONTRASEÑA</b>
                        </td>								
                    </tr>
                    <tr height="50"></tr>

                    <!-- start sintent section -->
                    <tr>
                        <td width="600" align="center" valign="top" bgcolor="#FFFFFF" style="margin: 20px 0;">
                            <table width="400" border="0" cellspacing="0" cellpadding="0" style="margin: 40px 0;">
                                <tr>
                                    <td align="center" bgcolor="#FFFFFF" style="background-color: #FFFFFF;color: #464E5F;font-family: Arial, Helvetica, sans-serif; font-size: 17px;font-weight: 400;line-height: 20px; max-width: 215px; text-align: start;">
                                        <span style="font-family: 'Arial';
                                        font-style: normal;
                                        font-size: 14px;
                                        line-height: 16px;
                                        text-align: start;
                                        max-width: 215px;
                                        ">
                                       
                                        Has solicitado un cambio de <br> contraseña a través de FSCE. <br>
                                        <br>
                                        Para continuar con esta <br> operación haz clic  <a href="https://fsce-prueba-eta.vercel.app/recuperar-contrasenia/${email}" target="_blank" style="color: #F50C10; text-decoration: none;">aquí</a> 
                                       <td align="center" valign="top" style="text-align: center;"><img src="https://raw.githubusercontent.com/sisiculturadigital/FSCE/feature/vistasRolComun/src/imgs/mailing/update-pwd.png" width="114" style="vertical-align: top;"></td>

                                    </td>								
                                </tr>
                                <tr height="80"></tr>
                            </table>
                        </td>
                    </tr> 
                    <tr>
                        <td align="center" bgcolor="#FFFFFF" style="background-color: #FFFFFF;color: #464E5F;font-family: Arial, Helvetica, sans-serif; font-size: 12px;font-weight: 700;line-height: 20px; ">
                            <span style="font-family: 'Arial';
                            font-style: normal;
                            font-size: 12px;
                            line-height: 16px;
                            text-align: center;
                            ">
                           **Por seguridad este enlace tiene una vigencia de 24 horas desde su emisión..
                        </td>								
                    </tr> 
                    <!-- end sintent section -->
                    <!-- start footer section -->
                    <tr>
                        <td width="600" align="center" valign="top" bgcolor="#FFFFFF">
                            <table width="600" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="start" valign="top">
                                        <img src="https://raw.githubusercontent.com/sisiculturadigital/FSCE/feature/vistasRolComun/src/imgs/mailing/footer.png" style="vertical-align: top;" width="600">
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <!-- end footer section -->
                </table>
                <!-- end body sintent -->
            </td>
        </tr>
    </table>
    <!-- end table -->
</body>

</html>
`
return template
}
