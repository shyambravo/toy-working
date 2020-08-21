
    var ob2;
    export const addob = (props)=>{
        console.log(props);
        ob2.push(props);
        console.log(ob2);
        localStorage.setItem("users", JSON.stringify(ob2));

    }

    export const delob = (props)=>{
       
          ob2 = JSON.parse(localStorage.getItem("users") || "[]");
          const idToRemove = props;
          
          const filteredPeople = ob2.filter((item) => item.Name !== idToRemove);
          localStorage.setItem("users", JSON.stringify(filteredPeople));
    }

    export const sortr = (props)=>{
       
        ob2 = JSON.parse(localStorage.getItem("users") || "[]");
        ob2.sort(GetSortOrder("Rating"));
        localStorage.setItem("users", JSON.stringify(ob2));
  }


  function GetSortOrder(prop) {  
    return function(a, b) {  
        if (a[prop] > b[prop]) {  
            return -1;  
        } else if (a[prop] < b[prop]) {  
            return 1;  
        }  
        return 0;  
    }  
} 

    ob2 = JSON.parse(localStorage.getItem("users") || "[]");
    console.log(ob2);
    export default ob2;


