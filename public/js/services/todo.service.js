
(function() {
  angular.module('mean-todos')
        .factory('TodoService', TodoService);

  TodoService.$inject = ['$http'];

  function TodoService($http){
    init();
    var todo = [];
    return {
      get: getAllTodos,
      create: createOneTodo,
      update: updateOneTodo,
      delete: deleteOneTodo
    };
    function init(){ //this is going to make our first data request upon file load
      $http.get('/todos')
            .then(function(response){
              todos = response.data;
            })
            .catch(function(err){
              console.log(err);
            });
    }
    function getAllTodos(){
      return todos;
    }
    function createOneTodo(todo){}
    function updateOne(index, todo){}
    function deleteOneTodo(index){}
  }
}());
