$(function(){
	$('#spendAmount').click(function(){	
		chrome.storage.sync.get('total',function(budget){
           var newtotal=0;
           if(budget.total)
           {
           	newtotal+=parseInt(budget.total);
           }

           var amount=$('#amount').val();
           if(amount)
           {
             newtotal+=parseInt(amount);
           }

        chrome.storage.sync.set({'total':newtotal});
        
        $('#total').text(newtotal);
        $('#amount').val('');   
		});
	});
});