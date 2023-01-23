


var flName;
var phoneNo;
var emailId;
var empIncome;
var otherIncome;
var taxesPaid;
var phoneRegex;
var errors;
var totalIncome = 0;
var twentyTax = 0;
var twentyFiveTax = 0;
var thirtyFourTax = 0;
var incomeTaxPayableOne = 0;
var incomeTaxPayableTwo = 0;
var incomeTaxPayableThree = 0;
var receiptMainContent;


function calculateBtn() {

    errors = '';

    phoneRegex = /^[0-9]{3}[\-][0-9]{3}[\-][0-9]{4}$/;

    flName = document.getElementById('userName').value;
    phoneNo = document.getElementById('phoneNumber').value;
    emailId = document.getElementById('emailId').value;
    empIncome = document.getElementById('empIncome').value;
    otherIncome = document.getElementById('otherIncome').value;
    taxesPaid = document.getElementById('incomeTaxesPaid').value;


    if(flName.trim() == '' || !isNaN(flName)) {
            
        errors += 'Name field is required!<br>';  
    }

    //Below validation will make sure phone field is not empty and accept on numbers
    if(phoneNo.trim() == '' || !phoneRegex.test(phoneNo)) {
        errors += 'Phone field is required and it should be in proper format(ex: 123-123-1234)!!<br>';  
    }

    if(emailId.trim() == '') {
        errors += 'Email field is required!<br>';  
    }

    if(empIncome.trim() == '' || isNaN(empIncome)) {
        errors += 'Employment income should be a whole number only<br>';  
    }

    if(isNaN(otherIncome)) {
        errors += 'Other income should be a whole number only<br>';  
    }

    if(taxesPaid.trim() == '' || isNaN(taxesPaid)) {
        errors += 'taxes should be paid as a whole number only<br>';  
    }

    if(errors != '') {
        document.getElementById('errors').innerHTML = errors;
        
    }
    
    else {
        //else part will generate the receipt when there is no error
        document.getElementById('errors').innerHTML = '';
        
    }

    totalIncome = parseInt(empIncome) + parseInt(otherIncome);


    if(totalIncome < 60000) {
        

        twentyTax = parseInt(totalIncome) * 0.20;
        
        incomeTaxPayableOne = parseInt(twentyTax) - parseInt(taxesPaid);

        receiptMainContent = ` 
        <h1 id="receiptHead">Output</h1> 
        <table>
            <tr class="trBackground">
                <td class="alignRight">Name</td>
                
                <td class="alignRight">${flName}</td>
            </tr>
            <tr class="trBackground">
                <td class="alignRight">Phone</td>
                
                <td class="alignRight">${phoneNo}</td>
            </tr>
            <tr class="trBackground">
                <td class="alignRight">Email</td>
                
                <td class="alignRight">${emailId}</td>
            </tr>
            <tr class="trBackground">
                <td class="alignRight">Total Income</td>
                
                <td class="alignRight">$${totalIncome}</td>
            </tr>
            <tr class="trBackground">
                <td class="alignRight">Total Income Tax</td>
                
                <td class="alignRight">$${twentyTax}</td>
            </tr>
            <tr>
                <td class="alignRight">Income Taxes Paid</td>
                
                <td class="alignRight">$${taxesPaid}</td>
            </tr>
            <tr>
                <td class="alignRight">Income Taxes Payable</td>
                
                <td class="alignRight">$${incomeTaxPayableOne}</td>
            </tr>
        </table>
        `
        document.getElementById('receiptMainContent').innerHTML = receiptMainContent;
    }
    
    if(totalIncome > 60000  && totalIncome < 90000 ) 
    {
        

        twentyFiveTax = parseInt(totalIncome) * 0.25;
        
        incomeTaxPayableTwo = parseInt(twentyFiveTax) - parseInt(taxesPaid);

                
        receiptMainContent = `
        <h1 id="receiptHead">Output</h1> 
        <table>
           <tr class="trBackground">
               <td class="alignRight">Name</td>
               
               <td class="alignRight">${flName}</td>
           </tr>
           <tr class="trBackground">
                <td class="alignRight">Phone</td>
               
                <td class="alignRight">${phoneNo}</td>
            </tr>
            <tr class="trBackground">
                <td class="alignRight">Email</td>
               
                <td class="alignRight">${emailId}</td>
            </tr>
                <tr class="trBackground">
                <td class="alignRight">Total Income</td>
               
                <td class="alignRight">$${totalIncome}</td>
            </tr>
                <tr class="trBackground">
                    <td class="alignRight">Total Income Tax</td>
               
                    <td class="alignRight">$${twentyFiveTax}</td>
                </tr>
                <tr>
                    <td class="alignRight">Income Taxes Paid</td>
                    
                    <td class="alignRight">$${taxesPaid}</td>
                </tr>
                <tr>
                    <td class="alignRight">Income Taxes Payable</td>
                    
                    <td class="alignRight">$${incomeTaxPayableTwo}</td>
                </tr>
                </table>
                `
                document.getElementById('receiptMainContent').innerHTML = receiptMainContent;
    }

    if(totalIncome > 90000)
     {
        
       thirtyFourTax = parseInt(totalIncome) * 0.34;
        incomeTaxPayableThree = parseInt(thirtyFourTax) - parseInt(taxesPaid);
                  
        receiptMainContent = ` 
        <h1 id="receiptHead">Output</h1> 
        <table>
           <tr class="trBackground">
               <td class="alignRight">Name</td>
              
               <td class="alignRight">${flName}</td>
           </tr>
           <tr class="trBackground">
                <td class="alignRight">Phone</td>
              
                <td class="alignRight">${phoneNo}</td>
            </tr>
            <tr class="trBackground">
                <td class="alignRight">Email</td>
              
                <td class="alignRight">${emailId}</td>
            </tr>
                <tr class="trBackground">
                <td class="alignRight">Total Income</td>
              
                <td class="alignRight">$${totalIncome}</td>
            </tr>
                <tr class="trBackground">
                    <td class="alignRight">Total Income Tax</td>
              
                    <td class="alignRight">$${thirtyFourTax}</td>
                </tr>
                <tr>
                    <td class="alignRight">Income Taxes Paid</td>
              
                    <td class="alignRight">$${taxesPaid}</td>
                </tr>
                <tr>
                    <td class="alignRight">Income Taxes Payable</td>
              
                    <td class="alignRight">$${incomeTaxPayableThree}</td>
                </tr>
                </table>
                `
                document.getElementById('receiptMainContent').innerHTML = receiptMainContent;
        }

    
         
   
    




   return false;
}
