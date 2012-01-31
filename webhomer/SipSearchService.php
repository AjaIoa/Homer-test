<?php
/*
 * HOMER Web Interface
 * Homer's SIP Search Service class
 *
 * Copyright (C) 2011-2012 Alexandr Dubovikov <alexandr.dubovikov@gmail.com>
 * Copyright (C) 2011-2012 Lorenzo Mangani <lorenzo.mangani@gmail.com>
 *
 * The Initial Developers of the Original Code are
 *
 * Alexandr Dubovikov <alexandr.dubovikov@gmail.com>
 * Lorenzo Mangani <lorenzo.mangani@gmail.com>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
*/

include_once('ISipService.php');
include_once('SipResult.php');


class SipSearchService implements ISipService
{

  protected $connection;

  protected $propertyToColumnMapping = array('id' => 'id',
  					     'date'            => 'date',
                                             'micro_ts'        => 'micro_ts',
                                             'method'	       => 'method',
					     'reply_reason'    => 'reply_reason',
					     'ruri' 	       => 'ruri',
					     'ruri_user'       => 'ruri_user',
                                             'from_user'       => 'from_user',
					     'from_tag'        => 'from_tag',
					     'to_user'         => 'to_user',
					     'to_tag'	       => 'to_tag',
                                             'pid_user'	       => 'pid_user',
					     'contact_user'    => 'contact_user',
					     'auth_user'       => 'auth_user',
					     'callid'	       => 'callid',					     
					     'callidtag'       => 'callid',					     
                                             'callid_aleg'     => 'callid_aleg',
					     'via_1'           => 'via_1',
					     'via_1_branch'    => 'via_1_branch',
					     'cseq'	       => 'cseq',
                                             'diversion'       => 'diversion',
					     'reason'          => 'reason',
					     'content_type'    => 'reason',
					     'authorization'   => 'authorization',
                                             'user_agent'      => 'user_agent',
					     'source_ip'       => 'source_ip',
					     'source_port'     => 'source_port',
					     'destination_ip'  => 'destination_ip',					     
                                             'destination_port'	       => 'destination_port',
					     'contact_ip'       => 'contact_ip',
					     'contact_port'     => 'contact_port',
					     'originator_ip'    => 'originator_ip',
					     'originator_port'  => 'originator_port',
                                             'proto'	        => 'proto',
					     'family'     => 'node',
					     'type'       => 'type',
					     'node'	  => 'node');

  public function __construct($homerhost)
  {
      global $db;  
      
  }

  function compare($x, $y)
  {
	if ( $x['micro_ts'] == $y['micro_ts'] )
		return 0;
	else if ( $x['micro_ts'] < $y['micro_ts'] )
		return -1;
	else
		return 1;
  }


  public function getAll($offset, $num, $sort, $sortDirection = 'desc', $isCount = false, $homer)
  {

     global $db, $mynodeshost;             
    
     $sort = $this->propertyToColumnMapping[$sort];

     $location = $homer->location;

     $skip_keys = array('location','max_records','from_date', 'to_date','from_time', 'to_time', 'unique','b2b');
     $ft = date("Y-m-d H:i:s", strtotime($homer->from_date." ".$homer->from_time));
     $tt = date("Y-m-d H:i:s", strtotime($homer->to_date." ".$homer->to_time));
     $fhour = date("H", strtotime($homer->from_date." ".$homer->from_time));
     $thour = date("H", strtotime($homer->to_date." ".$homer->to_time));
     $unique = $homer->unique;
     $b2b = $homer->b2b;
           
     /*Always ON */
     if(BLEGDETECT == 1) $b2b=1;

     $j=$thour+1;     
     
     $where = "(`date` BETWEEN '$ft' AND '$tt' )";              

     $max_records = (int) ($homer->max_records/count($location));
     
     $s=0;
     foreach($homer as $key=>$value) {

	   if(in_array($key, $skip_keys)) continue;

	   if(!isset($callwhere)) $callwhere = "(";
	   if($key == "callid" && $b2b ) $callwhere.=" (";

	   $eqlike = preg_match("/%/", $value) ? " like " : " = ";
     
     if(preg_match("/^!/", $value)) {
           $value =  preg_replace("/^!/", "", $value);
           $eqlike = "!=";
     }

       /* Array search */
     if(preg_match("/;/", $value)) {
              $dda = array();
              foreach(preg_split("/;/", $value) as $k=>$v) $dda[] = "`".$key."`".$eqlike."'".$v."'";
              $callwhere.="( ". ($eqlike == " = ") ? implode(" OR ",$dda) : implode(" AND ",$dda)." )";
     }
     else {
               $mkey = "`".$key."`";
               $mvalue = "'".$value."'";
               if($s == 1) $callwhere.=" AND ";
               $callwhere.= $mkey.$eqlike.$mvalue;
     }

	   if($key == "callid" && $b2b) {
                if(BLEGCID == "x-cid") $callwhere .= "OR callid_aleg ".$eqlike.$mvalue;
                else if(BLEGCID == "-0") $callwhere .= " OR callid ".$eqlike."'".$value.BLEGCID."'";
                $callwhere .= ") ";
           }

           $s = 1;
    }
                   
    if(isset($callwhere)) $where .= " AND ".$callwhere.")";

    //$node = sprintf("homer_node%02d.", $value);
    // check if we just need a count of results
    if($isCount){
      
      $count=0;
      foreach($location as $value) { 

              $db->dbconnect_homer(isset($mynodeshost[$value]) ? $mynodeshost[$value] : NULL);
              
              $query = "SELECT count(id) as count"
                      ."\n FROM ".HOMER_TABLE
                      ."\n WHERE ". $where.";";
              $count += $db->loadResult($query);	                      	      
      }

      return $count;

    } else {

  $results = array();
  $datasort = array();
  $message = array();

	foreach($location as $value) {
	
              $db->dbconnect_homer(isset($mynodeshost[$value]) ? $mynodeshost[$value] : NULL);
              
              $tnode = "'".$value."' as tnode";
              if($unique) $tnode .= ", MD5(msg) as md5sum";
              
              $query = "SELECT *,".$tnode
                ."\n FROM ".HOMER_TABLE 
                ."\n WHERE ". $where
                ."\n ORDER BY {$sort} {$sortDirection} "
                ."\n limit {$offset}, {$num}";				
                $result = $db->loadObjectArray($query);
          // Check if we must show up only UNIQ messages. No duplicate!
          //only unique
          if($unique) {
                    foreach($result as $key=>$row) {
                           if(isset($message[$row[md5sum]])) unset($result[$key]);
                           else $message[$row[md5sum]] = $row[node];                          
                    }
          }        
          $results = array_merge($results,$result);	      
	}

        /* Sort it if we have more than 1 location*/
        if(count($location) > 1) usort($results, create_function('$a, $b', 'return $a["micro_ts"] > $b["micro_ts"] ? 1 : -1;'));

        //Get aliases (hosts)
        $hosts = $db->getAliases();
	$sipresults = $this->hydrateResults($results, $location, $hosts);

      return $sipresults;
    }
  }




  public function searchAll($search, $columns, $offset, $num, $sort, $sortDirection = 'asc', $isCount = false, $homer, $searchtColumns, $parent)
  {

     global $db, $mynodeshost;                  
     
     $whereSqlParts = array();

     $location = $homer->location;
     

     $skip_keys = array('location','max_records','from_date', 'to_date','from_time', 'to_time','unique','b2b');
     $ft = date("Y-m-d H:i:s", strtotime($homer->from_date." ".$homer->from_time));
     $tt = date("Y-m-d H:i:s", strtotime($homer->to_date." ".$homer->to_time));
     $fhour = date("H", strtotime($homer->from_date." ".$homer->from_time));
     $thour = date("H", strtotime($homer->to_date." ".$homer->to_time));
     $unique = $homer->unique;
     $b2b = $homer->b2b;

     /*Always ON */
     if(BLEGDETECT == 1) $b2b=1;

     $j=$thour+1;     
     
     $where = " AND (`date` BETWEEN '$ft' AND '$tt' )";              

     $max_records = (int) ($homer->max_records/count($location));
     
      $s=0;
     foreach($homer as $key=>$value) {

   	if(in_array($key, $skip_keys)) continue;
	   if(!isset($callwhere)) $callwhere = "(";
	   if($key == "callid" && $b2b) $callwhere.=" (";
	   $eqlike = preg_match("/%/", $value) ? " like " : " = ";
      
     if(preg_match("/^!/", $value)) {
           $value =  preg_replace("/^!/", "", $value);
           $eqlike = "!=";
     }

     /* Array search */
     if(preg_match("/;/", $value)) {
              $dda = array();
              foreach(preg_split("/;/", $value) as $k=>$v) $dda[] = "`".$key."`".$eqlike."'".$v."'";
              $callwhere.="( ". ($eqlike == " = ") ? implode(" OR ",$dda) : implode(" AND ",$dda)." )";
     }
     else {
               $mkey = "`".$key."`";
               $mvalue = "'".$value."'";
               if($s == 1) $callwhere.=" AND ";
               $callwhere.= $mkey.$eqlike.$mvalue;
     }
     
      if($key == "callid" && $b2b) {
                if(BLEGCID == "x-cid") $callwhere .= "OR callid_aleg ".$eqlike.$mvalue;
                else if(BLEGCID == "-0") $callwhere .= " OR callid ".$eqlike."'".$value.BLEGCID."'";
                $callwhere .= ") ";
      }

	    $s = 1;
    }
                       
    if(isset($callwhere)) $where .= " AND ".$callwhere.")";
    if(empty($searchtColumns)) {    
        foreach($columns as $column){
          // get db column name
          $columnName = $this->propertyToColumnMapping[$column];
          $whereSqlParts[] = "{$column} LIKE '{$search}%'";           
      }
    }
    else {
      foreach($searchtColumns as $key=>$value){
      // get db column name      
       $columnName = $parent->getColumnIndexByNumber($key);
       $eqlike = preg_match("/%/", $value) ? " like " : " = ";
       $whereSqlParts2[] = "{$columnName} {$eqlike} '{$value}'";
      }
    }

    // build where clause for all columns we are searching against
    $whereSql = implode($whereSqlParts, ' OR ');
    $whereSql .= implode($whereSqlParts2, ' AND ');

    //$node = sprintf("homer_node%02d.", $value);

    // check if we just need a count of results
    if($isCount){

      $count=0;
      foreach($location as $value) {

              $db->dbconnect_homer(isset($mynodeshost[$value]) ? $mynodeshost[$value] : NULL);
              
              $query = "SELECT count(id) as count"
                      ."\n FROM ".HOMER_TABLE
                      ."\n WHERE ({$whereSql})". $where;                                                                                        
                      
              $count += $db->loadResult($query);                            
      }

      return $count;

    } else {

      $sort = $this->propertyToColumnMapping[$sort];

      $results = array();
      $datasort = array();
      $message = array();     
      
      foreach($location as $value) {

              $db->dbconnect_homer(isset($mynodeshost[$value]) ? $mynodeshost[$value] : NULL);
              
              $tnode = "'".$value."' as tnode";
              if($unique) $tnode .= ", MD5(msg) as md5sum";
              
              $query = "SELECT *,".$tnode
                                ."\n FROM ".HOMER_TABLE
                                ."\n WHERE ({$whereSql}) ". $where
                                ."\n ORDER BY {$sort} {$sortDirection} "
                                ."\n LIMIT {$offset}, {$num}"
                                ;
              $result = $db->loadObjectArray($query);               
              // Check if we must show up only UNIQ messages. No duplicate!
              if($unique) {
                    foreach($result as $key=>$row) {
                           if(isset($message[$row[md5sum]])) unset($result[$key]);
                           else $message[$row[md5sum]] = $row[node];
                    }
              }
              $results = array_merge($results,$result);
        }
        
        /* Sort it if we have more than 1 location*/
        if(count($location) > 1) usort($results, create_function('$a, $b', 'return $a["micro_ts"] > $b["micro_ts"] ? 1 : -1;'));

        //Get aliases (hosts)
        $hosts = $db->getAliases();                   
        $sipresults = $this->hydrateResults($results, $location, $hosts);

      return $sipresults;
    }
  }
  
  /**
   * Hydrate a db result set into an array of SipResult objects
   * 
   */
  protected function hydrateResults($results, $location, $hosts)
  {

    //print_r($hosts);
    $browsers = array();    
	// convert result set into array of SipResult objects
    foreach($results as $result){
    
      foreach($hosts as $host) {
            if($host->host == $result["source_ip"]) {
                  $result["source_ip"] = $host->name;
            }            
            if($host->host == $result["destination_ip"]) {
                  $result["destination_ip"] = $host->name;
            }            
      }
    
      $sipresults[] = new SipResult($result, $location);
    }
    
    return $sipresults;
  }
}
