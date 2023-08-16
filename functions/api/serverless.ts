export default async function main(argumentJson) {
   console.log("HTTP function triggered");
   return {
       "body": `      
       <!DOCTYPE html>
           <html lang="en">
           <head>
           </head>
           <body>
               <div style=" margin-top: 10%; margin-left: 30%; text-align: center;">
                   <body>
                       <h1>Serverless Function</h1>
                       <p>A response.</p>
                   </body>
               </div>
           </body>
           </html>
       `,
       "statusCode": 200,
       "headers": {
           "Cache-control": "no-store",
           "X-Yext-Test": "Example header",
       },
     };
}
