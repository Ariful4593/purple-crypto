import mailjet from "node-mailjet";

const mailjetClient = mailjet.connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET
);

const sendEmailPaymentCompleted = async (
  userEmail,
  transactionID,
  couponCode
) => {
  return new Promise((resolve, reject) => {
    const request = mailjetClient.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_EMAIL,
          },
          To: [
            {
              Email: userEmail,
              Name: process.env.MAILJET_EMAIL,
            },
          ],
          Subject: `${process.env.NEXT_PUBLIC_SERVER_NAME} - You received your giftcard!`,
          TextPart: `You received your giftcard!`,
          HTMLPart: `
          <!DOCTYPE html>
          <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
          
          <head>
            <title></title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
            <style>
              * {
                box-sizing: border-box;
              }
          
              body {
                margin: 0;
                padding: 0;
              }
          
              a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
              }
          
              #MessageViewBody a {
                color: inherit;
                text-decoration: none;
              }
          
              p {
                line-height: inherit
              }
          
              @media (max-width:500px) {
                .row-content {
                  width: 100% !important;
                }
          
                .stack .column {
                  width: 100%;
                  display: block;
                }
              }
            </style>
          </head>
          
          <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
            <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
              <tbody>
                <tr>
                  <td>
                    <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f3f3;">
                      <tbody>
                        <tr>
                          <td>
                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 480px;" width="480">
                              <tbody>
                                <tr>
                                  <td class="column" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="empty_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td>
                                          <div></div>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f3f3;">
                      <tbody>
                        <tr>
                          <td>
                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #19253d; color: #000000; width: 480px;" width="480">
                              <tbody>
                                <tr>
                                  <td class="column" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 20px; padding-right: 20px; padding-top: 20px; padding-bottom: 20px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td style="width:100%;padding-right:0px;padding-left:0px;">
                                          <div align="center" style="line-height:10px"><img src="${process.env.LOGO_URL}" style="display: block; height: auto; border: 0; width: 352px; max-width: 100%;" width="352" alt="${process.env.SERVER_NAME}" title="${process.env.SERVER_NAME}"></div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table class="text_block" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                      <tr>
                                        <td>
                                          <div style="font-family: sans-serif">
                                            <div style="font-size: 14px; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
                                              <p style="margin: 0; font-size: 14px; text-align: center;">Your transaction has been completed!</p>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table class="button_block" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td>
                                          <div align="center">
                                            <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${process.env.BASE_URL}/transaction/${transactionID}" style="height:48px;width:202px;v-text-anchor:middle;" arcsize="86%" stroke="false" fillcolor="#41a4ff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#020d16; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="${process.env.NEXT_PUBLIC_BASE_URL}/transaction/${transactionID}" target="_blank" style="text-decoration:none;display:inline-block;color:#020d16;background-color:#41a4ff;border-radius:41px;width:auto;border-top:0px solid #8a3b8f;border-right:0px solid #8a3b8f;border-bottom:0px solid #8a3b8f;border-left:0px solid #8a3b8f;padding-top:08px;padding-bottom:08px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:25px;padding-right:25px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">View your transaction</span></span></a>
                                            <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f3f3;">
                      <tbody>
                        <tr>
                          <td>
                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 480px;" width="480">
                              <tbody>
                                <tr>
                                  <td class="column" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td style="width:100%;padding-right:0px;padding-left:0px;">
                                          <div align="center" style="line-height:10px"><img src="https://cdn.discordapp.com/attachments/455777545485549589/917842457172000818/undraw_happy_birthday_re_c16u_1.png" style="display: block; height: auto; border: 0; width: 146px; max-width: 100%;" width="146"></div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                      <tr>
                                        <td style="padding-top:20px;padding-right:60px;padding-left:60px;">
                                          <div style="font-family: sans-serif">
                                            <div style="font-size: 14px; mso-line-height-alt: 21px; color: #393d47; line-height: 1.5; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
                                              <p style="margin: 0; font-size: 14px; text-align: center; letter-spacing: normal;"><strong>Dear Gamer,</strong></p>
                                              <p style="margin: 0; font-size: 14px; text-align: center; letter-spacing: normal; mso-line-height-alt: 21px;">&nbsp;</p>
                                              <p style="margin: 0; font-size: 14px; text-align: center; letter-spacing: normal;">Your payment has been successfully completed! Your coupon is now valid in our store!</p>
                                              <p style="margin: 0; font-size: 14px; text-align: center; letter-spacing: normal; mso-line-height-alt: 21px;">&nbsp;</p>
                                              <p style="margin: 0; font-size: 14px; text-align: center; letter-spacing: normal;"><strong><em>Have fun shopping!</em></strong></p>
                                              <p style="margin: 0; font-size: 14px; text-align: center; letter-spacing: normal; mso-line-height-alt: 21px;">&nbsp;</p>
                                              <p style="margin: 0; font-size: 14px; text-align: center; letter-spacing: normal;"><strong>Your giftcard code:</strong></p>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table class="button_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td style="text-align:center;padding-top:5px;padding-right:5px;padding-bottom:20px;padding-left:5px;">
                                          <div align="center">
                                            <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:44px;width:183px;v-text-anchor:middle;" arcsize="94%" stroke="false" fillcolor="#ff8c87"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#711c1a; font-family:Arial, sans-serif; font-size:16px"><![endif]-->
                                            <div style="text-decoration:none;display:inline-block;color:#711c1a;background-color:#ff8c87;border-radius:41px;width:auto;border-top:0px solid #8a3b8f;border-right:0px solid #8a3b8f;border-bottom:0px solid #8a3b8f;border-left:0px solid #8a3b8f;padding-top:08px;padding-bottom:08px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:25px;padding-right:25px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 1.8; word-break: break-word; mso-line-height-alt: 29px;"><strong>${couponCode}</strong></span></span></div>
                                            <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table class="divider_block" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td>
                                          <div align="center">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                              <tr>
                                                <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #DFDFDF;"><span>&#8202;</span></td>
                                              </tr>
                                            </table>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table class="menu_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td style="text-align:center;color:#000000;padding-right:10px;padding-bottom:10px;padding-left:10px;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;">
                                          <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                            <tr>
                                              <td style="text-align:center;font-size:0px;">
                                                <div class="menu-links">
                                                  <!--[if mso]>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style="">
          <tr>
          <td style="padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px">
          <![endif]--><a href="${process.env.NEXT_PUBLIC_STORE_URL}" style="padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;display:inline-block;color:#0068A5;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;text-decoration:none;letter-spacing:normal;">Visit our store</a>
                                                  <!--[if mso]></td></tr></table><![endif]-->
                                                </div>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f3f3;">
                      <tbody>
                        <tr>
                          <td>
                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 480px;" width="480">
                              <tbody>
                                <tr>
                                  <td class="column" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="empty_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td>
                                          <div></div>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table><!-- End -->
          </body>
          
          </html>`,
          CustomID: "AppGettingStartedTest",
        },
      ],
    });
    request
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { sendEmailPaymentCompleted };
