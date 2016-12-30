<!DOCTYPE html>
<html>
<head><meta http-equiv="X-UA-Compatible" content="IE=edge;" /> </head>
  
<script type="text/javascript"  src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
   ExecuteOrDelayUntilScriptLoaded(initFunc,"sp.js");
 });
</script>
 
<script type="text/javascript">
    
function initFunc(){
            alert("JQuery should work");

            debugger;

            var currentUserId = _spPageContextInfo.userId;
            var groupId = 265;
            isUserMemberOfGroup(currentUserId, groupId, 
                function (isCurrentUserInGroup) {
                    if(isCurrentUserInGroup)
                    {

                    console.log('Current user is a member of Owners group'); 
                    $('input[title="Project Name"]').attr("readonly",false)

                    }
                   else
                    {  
                      console.log('Current user is not a member of Owners group'); 
                      $('input[title="Project Name"]').attr("readonly",true)

                      $("span.ms-cui-ctl-largelabel:contains('Attach')").parent("a").hide();

                      //$("#Ribbon.ListForm.Edit.Actions").css("display","none");
                      }
                    },
              function(sender,args){
                 console.log(args.get_message());
              });
}    
    
function isUserMemberOfGroup(userId, groupId, success,error) {
     var ctx = SP.ClientContext.get_current(); 
     var allGroups = ctx.get_web().get_siteGroups();
     var group = allGroups.getById(groupId);
     ctx.load(group,'Users');
     ctx.executeQueryAsync(
        function(sender, args) {
            var userInGroup = findUserById(group.get_users(),userId);
            success(userInGroup);
       },
       error);    
       var findUserById = function(users,id){
           var found = false;
           var e =  group.get_users().getEnumerator();
           while (e.moveNext()) {
                var user = e.get_current();
                if (user.get_id() == id) {
                    found = true;
                    break;
                }
           } 
           return found; 
       };
}

  
 
</script>
 
</html>