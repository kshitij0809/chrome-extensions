$(function(){
    chrome.storage.sync.get(['total','limit'],function(budget){
    	$('#total').text(budget.total);
    	$('#limit').text(budget.limit);
    })


	$('#spendAmount').click(function(){	
		chrome.storage.sync.get(['total','limit'],function(budget){
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

        chrome.storage.sync.set({'total':newtotal},function(){
        	if (amount && total>budget.limit) {
        		var notifOptions={
        			type:'basic',
        			iconUrl:'icon48.png',
        			title:'limit reached',
        			message:"uh! you have reached the limit"
        		};
        		chrome.notifications.create('limitNotif',notifOptions);
        	}
        });
        
        $('#total').text(newtotal);
        $('#amount').val('');   
		});
	});
});