import React from 'react';
import Card from 'src/components/ListRessources/Card';
// import Filter from 'src/components/ListRessources/Filter';
import './styles.scss';

const ListRessources = ({ ressources }) => {

  console.log(ressources)

  return (
    <div>
      {ressources.map((ressource) => (
        <Card
          key={ressource.id}
          {...ressource}
        />
      ))}
    </div>
  )

};

export default ListRessources;
    // <div>
    //   {ressources.filter(function => name.includes('J')).map(filteredName => (
    //     <li>
    //       {filteredName}
    //     </li>
    //   ))}
    // </div>

  // <div>
  //   {ressources.map((ressource) => (
  //     <Card
  //       key={ressource.id}
  //       {...ressource}
  //     />
  //   ))}
  // </div>
/**
 *
 *
 *
 * {this.state.tasks
        .filter(function(task, index, props) {
          return task.completed === props.completedTasks;
        })
        .map(function(task, index) {
          return(
            <Task
              name={task.name}
              key={task.id}
              completed={task.completed}
              onCompleted={function() {this.onCompletedTask(index)}.bind(this)}
              onRemove={function() {this.onRemoveTask(index)}.bind(this)}
            />
          );
        }.bind(this))}
 */
