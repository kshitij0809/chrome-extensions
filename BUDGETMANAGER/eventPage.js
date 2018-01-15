var contextMenuItem={
	"id":"spendMoney",
	"title":"SpendMoney",
	"contexts":["selection"]
};
chrome.contextMenus.create(contextMenuItem);

function isInt(value){
	return !isNaN(value) && parseInt(number(value))==value && !isNaN(parseInt(value,10));
}

chrome.contextMenus.onClicked.addListener(function(clickData){
if(clickData.menuItemId=="spendMoney" && clickData.selectionText){
	if(isInt(clickData.selectionText)){
		chrome.storage.sync.get(['total','limit'],function(budget){
			var newtotal=0;	
			if(budget.total){
				newtotal+=parseInt(budget.total);
			}
			newtotal+=parseInt(clickData.selectionText);

			chrome.storage.sync.set({'total':newtotal},function()
			{
				if(newtotal>budget.limit){
					var notifOptions={
        			type:'basic',
        			iconUrl:'icon48.png',
        			title:'limit reached',
        			message:"uh! you have reached the limit"
        		};
        		chrome.notifications.create('limitNotif',notifOptions);
				}
			});
		});
	 }
  }
});
