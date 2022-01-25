export default function checkHealth(obj) {
    //{name: 'Маг', health: 90}    
    if (obj.health > 50) {
      return 'healthy'
    } if (obj.health >= 15 && obj.health <= 50) {      
      return 'wounded'
    } if (obj.health < 15 && obj.health >= 0) {      
      return 'critical'
    }
    return 0
  }