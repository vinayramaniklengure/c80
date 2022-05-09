studentarray=[]
function submit(){
    var displayarray=[]
    for(var j=1;j<=4;j++){
        var name=document.getElementById("name_of_the_student_"+j).value 
        console.log(name)
        studentarray.push(name)
    }
    var length1=studentarray.length
    console.log(length1)
    for(var k=0;k<length1;k++){
        displayarray.push("<h4>name - "+studentarray[k]+"</h4>")
    }
    console.log(displayarray)
    document.getElementById("display_name_with_commas").innerHTML=displayarray
    var rc=displayarray.join(" ")
    console.log(rc)
    document.getElementById("display_name_without_commas").innerHTML=rc
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    studentarray.sort()
    console.log(studentarray)
    var displayarray1=[]
    var length1=studentarray.length
    console.log(length1)
    for(var k=0;k<length1;k++){
        displayarray1.push("<h4>name - "+studentarray[k]+"</h4>")
    }
    console.log(displayarray1)
    document.getElementById("display_name_with_commas").innerHTML=displayarray1
    var rc=displayarray1.join(" ")
    console.log(rc)
    document.getElementById("display_name_without_commas").innerHTML=rc 
}