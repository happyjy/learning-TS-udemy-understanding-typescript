// 62. "private" and "public" Access Modifiers

// 1️⃣ :
// - private은 3️⃣에서 설명한 것처럼 인스턴스의 property로 접근하지 못합니다.
// - public은 4️⃣에서 설명한 것 처럼 인스턴스의 property로 접근, 수정이 가능합니다.

// - 참고 Public class fields에 대한 내용
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields
class Department {
  public name: string;
  // 2️⃣ : string 배열 선언 방법
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length, this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("JYoon");
accounting.addEmployee("Bono");

// 3️⃣ : employees private이라 접근 불가라 에러
// employees의 접근제한자를 private -> public 변경하면 에러 생기지 않음
// accounting.printEmployeeInformation(); 의 결과값도 3 (3) ['JYoon', 'Bono', 'Anna']
// accounting.employees[2] = "Anna";
// accounting.printEmployeeInformation();

accounting.describe(); // Department: Accounting
accounting.name = "NEW NAME"; //4️⃣
accounting.describe(); // Department: NEW NAME
accounting.printEmployeeInformation(); // 2, ['Max', 'Manu']
