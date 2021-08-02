export const UseSearchUtility=(arr,peoplee)=>{
    var newPeople=peoplee.filter(value=>{         
        var flag1=0,flag2=0,flag3=0;
        if(arr[0].length) flag1=1;
        if(arr[1].length) flag2=1;
        if(arr[2].length) flag3=1;
        if(flag1 && flag2 && flag3){
              if(arr[0]===value.name.toLowerCase() && arr[1]===value.location.toLowerCase() && arr[2]===value.skill.toLowerCase())
                return value;
        }
        else if(flag1 && flag2){
              if(arr[0]===value.name.toLowerCase() && arr[1]===value.location.toLowerCase())
                return true
        }
        else if(flag2 && flag3){
              if(arr[1]===value.location.toLowerCase() && arr[2]===value.skill.toLowerCase())
                return true
        }
        else if(flag1 && flag3){
              if(arr[0]===value.name.toLowerCase() && arr[2]===value.skill.toLowerCase())
                return true
        }
        else if(flag1){
              if(arr[0]===value.name.toLowerCase())
                return value;
        }
        else if(flag2){
          if(arr[1]===value.location.toLowerCase())
            return value;
        }
        else if(flag3){
          if(arr[2]===value.location.toLowerCase())
            return value;
        }
       
        return null;
      })
  return newPeople;
};
