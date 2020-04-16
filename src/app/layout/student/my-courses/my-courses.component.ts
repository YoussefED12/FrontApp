import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../shared/services/course.service';
import { Course } from '../../shared/model/course';
import { TokenStorageService } from 'src/app/authentication/token storage/token-storage.service';
import { error } from 'util';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  public courses = new Array<Course>();
  constructor(private service: CourseService,
    private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.fetchData();
  }

  // unSubscribe(id: number) {
  //   this.service.unSubscribeFromCourse(id).subscribe(
  //     Response => {
  //       alert("un subscribe with success");
  //       this.fetchData();
  //     }
  //     ,
  //     error => { alert("something went wrong"); }
  //   );
  // }
  fetchData(){
    this.service.getStudentCourses(Number.parseInt(this.tokenStorage.getUserId())).subscribe(
      courses => { this.courses = courses; }
    );
  }
}
