// 5.9 method() Method

TestCase("05-Object-Creation-Patterns method() Method", {

	"test method() Method" : function () {
		var a = new Person('adam');
		assertEquals('adam', a.getName());
		assertEquals('Eve', a.setName('Eve').getName());

	}

});