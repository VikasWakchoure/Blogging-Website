import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
 import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryArray: Array<object> |any;
  formCategory:string |any;
  formStatus :string = 'add';
  categoryId :string |any;
  
  constructor( private categoryService: CategoriesService ){}
  ngOnInit(): void {
    
    this.categoryService.loadData().subscribe(val => {
      console.log(val);
      this.categoryArray = val;
    })

  }

  onSubmit(formData:any){
    let categoryData: Category = {
      category: formData.value.category

    }

    if( this.formStatus == 'Add'){
      this.categoryService.saveData(categoryData);
      formData.reset();
    }

    else if( this.formStatus == 'Edit'){
      this.categoryService.updateData(this.categoryId, categoryData);
      formData.reset();
      this.formStatus='Add';
    }

    this.categoryService.saveData(categoryData);

    formData.reset();
//     let subCategoryData = {
//       subCategory: 'subCategory1'

//     }
//     this.afs .collection('categories').add(categoryData).then(docRef => {
//       console.log(docRef);
 
//       // this.afs.doc(`categories/${docRef.id}/`).collection('subcategories').add(subCategoryData)

//       this.afs.collection("categories").doc(docRef.id).collection('subcategories').add(subCategoryData).then(docRef1 => {
//         console.log(docRef1);

//       //  this.afs.doc(`categories/${docRef.id}/subCategories/${docRef1.id}`).collection('subsubcategories').add(subCategoryData)
       

//         this.afs.collection('categories').doc(docRef.id).collection('subCategories').doc(docRef1.id).collection('subsubcategories').add(subCategoryData).then(docRef2 =>{
//           console.log("Second Level Subcategory Saved Sucessfully")
//         })
//       })
//     })
//     .catch(err => { console.log (err)})

}

onEdit(category: any, id: any ){
  this.formCategory = category;
  this.formStatus= 'Edit';
  this.categoryId= id;
}

onDelete(id: any){
    this.categoryService.deleteData(id);
}
}
