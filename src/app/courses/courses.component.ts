import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  editable:boolean = false;
  myCourse:any={
    id:0,
    label:""
  };
  courses :any[] = [
    {id:1,label:"Learn Angular"},
    {id:2,label:"Learn CSS"},
    {id:3,label:"Learn Spring boot"},
    {id:4,label:"Learn HTML5"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addCourse(){
    //this.courses.push(this.myCourse);
    this.courses = [this.myCourse,...this.courses];
    this.myCourse={
      id : 0,
      label : ""
    };
  }

  deleteCourse(course){
    // if (confirm("Are you sure to delete this course ?")){
    //   let index = this.courses.indexOf(course);
    //   this.courses.splice(index,1)
    // }
    Swal.fire({
      title: 'Are you sure to delete ?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete !',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        let index = this.courses.indexOf(course);
        this.courses.splice(index,1)
        Swal.fire(
          {
            title : 'Deleted!',
            text : 'Course deleted successfully',
            icon : 'success',
            timer : 5000
          }
        )
        
      } 
    })
  }

  editCourse(course){
    this.myCourse = course;
    this.editable = true;
  }
  updateCourse(){
    this.editable = false;
    this.myCourse = {
      id : 0,
      label : ""
    };
  }

}
